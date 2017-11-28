const path = require('path');
const cluster = require('cluster');
cluster.schedulingPolicy = cluster.SCHED_RR;
const maxNumCpus = require('os').cpus().length;

const env = process.env.NODE_ENV || 'development';
const rootPath = path.resolve(__dirname, '..');

// server config
const config = require('./config')[env];

// mongoose config
require('./config/mongoose')(config);

if (cluster.isMaster) {
  // console.info(`Master process ${process.pid} is running...`);

  // fetch package.json data into the current process
  process.packageJson = {};
  require('importpackagejson')(rootPath, [
    'name', 'version', 'dependencies'
  ], process.packageJson);
  // console.info(process.packageJson);

  // fork workers
  const clusterWorkers = [];
  for (let worker = 0; worker < maxNumCpus; ++worker) {
    cluster.fork();
  }

  const rl = require('readline');
  const consoleLogger = rl.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.cursorTo(consoleLogger, 0, 0);
  rl.clearScreenDown(consoleLogger);

  for (const workerId in cluster.workers) {
    cluster.workers[workerId].on('message', msg => {
      if (msg.notification && msg.notification === 'req') {
        if (msg.pid) {
          rl.cursorTo(consoleLogger, 0, clusterWorkers.findIndex(w => w === msg.pid));
          rl.clearLine(consoleLogger, 1 /* to the right of the cursor */);
          consoleLogger.write(`[Worker ${msg.pid}] ${msg.url}\n`);
        }
      }
    });
  }

  cluster.on('listening', (worker, address) => {
    clusterWorkers.push(worker.process.pid);

    rl.cursorTo(consoleLogger, 0, clusterWorkers.findIndex(w => w === worker.process.pid));
    rl.clearLine(consoleLogger, 1 /* to the right of the cursor */);
    consoleLogger.write(`[Worker ${worker.process.pid}] listening on port ${address.port}\n`);
  });

  cluster.on('exit', (worker, code, signal) => {
    clusterWorkers.pop(worker.process.pid);

    rl.cursorTo(consoleLogger, 0, clusterWorkers.findIndex(w => w === worker.process.pid));
    rl.clearLine(consoleLogger, 1 /* to the right of the cursor */);
    consoleLogger.write(`[Worker ${worker.process.pid}] is DEAD (code: ${code}; signal: ${signal})\n`);
  });
} else {
  const express = require('express');
  const app = express();

  // call master process when an HTTP request arrives
  app.use(function(req, res, next) {
    process.send({
      notification: 'req',
      url: req.url,
      pid: process.pid
    });

    next();
  });

  // Setup helmet
  const helmet = require('helmet');
  app.use(helmet());

  const uuid = require('uuid/v4');
  app.use(function(req, res, next) {
    res.locals.nonce = uuid();
    next();
  })

  const csp = require('helmet-csp');
  app.use(csp({
    directives: {
      defaultSrc: [ "'self'" ],
      styleSrc: [ "'self'", 'maxcdn.bootstrapcdn.com' ],
      scriptSrc: [ "'self'",
        function(req, res) {
          return `'nonce-${res.locals.nonce}'`;
        }
      ],
      imgSrc: [ "'self'", 'data:' ],
      sandbox: [ 'allow-forms', 'allow-scripts' ],
      reportUri: '/report-violation',
      objectSrc: [ "'none'" ],  // an empty array allows nothing through
    },
    reportOnly: config.cspReportOnly,
    browserSniff: true,
    disableAndroid: false
  }));

  // Setup routing
  // Connecting the API router
  const apiRouter = require('./api-routes');
  app.use('/API/', apiRouter);

  // Main web router
  const webRouter = require('./web-routes');
  app.use('/', webRouter);

  app.listen(config.port, '127.0.0.1', () => {
    // console.info(`Worker ${process.pid} running in ${env} mode on port ${config.port}!`);
  });
}
