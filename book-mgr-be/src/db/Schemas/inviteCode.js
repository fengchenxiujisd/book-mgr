const mongoose = require('mongoose');
const getMate = require('../helpers');

const inviteCodeSchema = new mongoose.Schema({
    //code 字段就是邀请码
    code: String,
    user: String,
    meta: getMate()
})

mongoose.model('inviteCode', inviteCodeSchema);