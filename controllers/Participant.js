
const Joi = require('joi');
const Participant = require('../models/Participant');

const participants = require('../models/Participant');

exports.initiate = (req, res) => {
    try {
      const schema = {
          userIds: Joi.array().items(Joi.string()).unique().required(),
        }
      const validation = (req.body, schema);

      if (validation.error) return res.status(400).json({ error: 'Entrer un tableau des Id user'  });
  
      const userIds = req.body.userIds;
      const { userId: chatInitiator } = req;
      const allUserIds = [...userIds, chatInitiator];
      const chatGroup = await participants.initiateChat(allUserIds, chatInitiator);
      return res.status(200).json({ message:'Groupe de discusion crée avec success', chatGroup });
    }
    catch (error) {
      return res.status(500).json({ error: error })
    }
}