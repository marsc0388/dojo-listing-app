const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dojo = new Schema({
    title: {type: String, required: true, index: {unique: true} },
    kanchou: {type: String, required: true },
})

module.exports = mongoose.model('Dojo', Dojo);