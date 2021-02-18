const mongoose = require('mongoose');
// const userModel = require('./Schemas/User.js');
require('./Schemas/User.js');
require('./Schemas/inviteCode');

const connect = () => {
    return new Promise((resolve) => {

        mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');
        mongoose.connection.on('open', async () => {
            console.log("连接成功")
            // const user = new userModel({
            //     name: 'zz',
            //     password: '123'
            // })
            // const result = await user.save();
            // console.log('result=>', result)
            resolve();
        })
    })
}

module.exports = {
    connect
}