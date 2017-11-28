'use strict';

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  // console.log(`Web => ${req.url}`);
  next();
});

router.get('/', (req, res) => {
  res.end('Server Routing OK!');
})

module.exports = router;
