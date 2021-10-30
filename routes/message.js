const { Router } = require('express');
const express = require('express');
const message = require('../controllers/Message');

const router = express.Router();

router
.get('/', function(req, res){message.getAllMessages})
.get('/:ObjectId', function(req, res){message.getMessage})
.post('/', function(req, res){message.createUser})
.delete('/:groupId/:ObjectId', function(req, res){message.deleteUser})
.post('/:groupId/message', function(req, res){message.postMessage})
.put('/:groupId/read', function(req, res){message.markConversationReadByGroupId})


module.exports = router;