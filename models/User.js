const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    User_id: ObjectId,
    Username: { type: String, required: true},
    email: { type: String, required: true, lowercase:true, unique: true },
    password: {type: String, required: true},
    on_line: { type: Boolean, default: false },
    last_seen :{type: Date, default: Date.now}
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);