const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const GroupSchema = new Schema({
    Group_Id: ObjectId,
    Group_name: { type: String, required: true, lowercase:true },
    created_at: {type:Date, default: Date.now},
});
module.exports = mongoose.model('Group', GroupSchema);