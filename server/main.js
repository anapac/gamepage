const cluster = require('cluster');
const maxNumCpus = require('os').cpus().length;

const env = process.env.NODE_ENV || 'development';

// server config
const config = require('./config')[env];

// mongoose config
require('./config/mongoose')(config);

if (cluster.isMaster) {
  console.info(`Master process ${process.pid} is running...`);

  // fork workers
  for (let worker = 0; worker < maxNumCpus; ++worker) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.warn(`worker ${worker.process.pid} died!`);
  });
} else {
  const express = require('express');
  const app = express();
  const webRouter = require('./web-routes');
  const apiRouter = require('./api-routes');

  // Connecting the API router
  app.use('/API/', apiRouter);

  // Main web router
  app.use('/', webRouter);

  app.listen(config.port, () => {
    console.log(`Worker ${process.pid} running in ${env} mode on port ${config.port}!`);
  });
}
