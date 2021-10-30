const express = require('express');
const users = require('../controllers/User');
const auth = require('../middleware/auth');

const router = express.Router();

router
  .post('/login/:userId', (req, res, next) => { });

module.exports =  router;
