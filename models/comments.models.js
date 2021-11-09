const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
    text: { type: String, require: true}
})

module.exports = mongoose.model('Comments', schema)