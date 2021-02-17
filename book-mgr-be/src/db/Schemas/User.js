const mongoose = require('mongoose')
const getMeta = require('../helpers')

const userSchema = mongoose.Schema({
    name: String,
    password: String,

    meta: getMeta()
});

module.exports = mongoose.model('user', userSchema);
