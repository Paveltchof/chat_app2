const express = require('express');
const group = require('../controllers/Group');

const router = express.Router();

router
  .get('/',group.getRecentConversation)
  .get('/:ObjectId',group.getConversationByGroupId)
  .delete('/:ObjectId', group.deleteGroupById)

module.exports = router;