const express = require('express');
const user = require('../controllers/User');

const router = express.Router();

router 
  .get('/', user.GetAllUsers)
  .post('/', user.CreateUser)
  .get('/:email', user.GetUserByEmail)
  .delete('/:id', user.DeleteUserByEmail)

module.exports = router;