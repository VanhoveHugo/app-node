const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    name: { type: String, require: true},
    password: { type: String, require: true}
})

module.exports = mongoose.model('Users', schema)