const mongoose = require('mongoose');
const Group = require('./Group');
const User = require('./User');

const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const message = new Schema({
  Message_id: ObjectId,
  Group: [{ type:ObjectId,
             ref:"Group"}],
  User:[{ type:ObjectId,
            ref:"User"}],
  message_body: {type:String, required:true},
  sent_at: { type: Date, default: Date.now },
  read: {type:Boolean, default:false},
});

module.exports = mongoose.model('Message', message);