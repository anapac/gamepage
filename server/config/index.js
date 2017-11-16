const path = require('path');

module.exports = {
  development: {
    port: 80,
    db: 'mongodb://localhost:27017/gamepage'
  },

  production: {
    port: 80,
    db: process.env.DB_CONN_STRING
  }
};
