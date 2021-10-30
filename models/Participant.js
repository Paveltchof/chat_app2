const mongoose = require('mongoose');
const group = require('./Group');
const user = require('./User');

const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId

const ParticipantSchema = Schema({
    group = [{
        type:ObjectId,
        ref:"Group"}],
    user = [{
        type:ObjectId,
        ref:"User"}],
});

ParticipantSchema.statics.initiateChat = async function (
	userIds, chatInitiator
) {
  try {
    const availableRoom = await this.findOne({
      userIds: {
        $size: user.length,
        $all: [...user],
      },

    });
    if (availableRoom) {
      return {
        isNew: false,
        message: 'retrieving an old chat room',
        Id: availableRoom._doc.group,
      };
    }

    const newRoom = await this.create({ userIds, chatInitiator });
    return {
      isNew: true,
      message: 'creating a new chatroom',
      GroupId: newRoom._doc.group,
    };
  } catch (error) {
    console.log('error on start chat method', error);
    throw error;
  }
}
module.exports = mongoose.models('Participants', ParticipantSchema);