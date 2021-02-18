const mongoose = require('mongoose')
const getMeta = require('../helpers')

const userSchema = mongoose.Schema({
    account: String,
    password: String,

    meta: getMeta()
});

module.exports = mongoose.model('user', userSchema);
