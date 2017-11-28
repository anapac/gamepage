'use strict';

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  // console.log(`API => ${req.url}`);
  next();
});

router.get('/', (req, res) => {
  res.end('API Routing OK!');
})

module.exports = router;
