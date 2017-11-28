const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = config => {
  if (!config.db) {
    console.warn('No DB connection string supplied! Starting w/out a db...');
    return;
  }

  const options = {
    useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 5
  };

  mongoose.connect(config.db, options)
    .then()
    .catch(err => {
      console.error('Error connecting to DB');
      console.error(err);
    });
  const db = mongoose.connection;

  db.once('open', err => {
    if (err) {
      console.warn(`Error opening DB: ${config.db}`);
      console.warn('Starting w/out a db...');
      return;
    }

    // console.info('DB connection established successfully.');
  });

  db.on('error', err => {
    console.error(`DB error: ${err}`);
  });

  // (re)create the Admin user account in the db
  // require('./db-seed').createAdmin(/* pass */ '12345678');
};
