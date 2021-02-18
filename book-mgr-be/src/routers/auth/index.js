// import { Router } from '@koa/router'
const Router = require('@koa/router')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { getBody } = require('../../helpers/utils');

const User = mongoose.model('user')
const InviteCode = mongoose.model('inviteCode')

const router = new Router({
    prefix: '/auth'
})

router.post('/register', async (ctx) => {
    const { account, password, inviteCode } = getBody(ctx);
    const user = new User({
        account,
        password,
    })
    const one = await User.findOne({
        account
    }).exec();

    const findCode = await InviteCode.findOne({
        code: inviteCode
    }).exec();

    console.log('findCode=>', findCode)

    // console.log(await User.find())

    if (one) {
        ctx.body = {
            code: 0,
            msg: "注册失败 用户已存在",
        }

        return;
    }

    if (!findCode) {
        ctx.body = {
            code: 0,
            msg: "注册失败 邀请码错误"
        }
        return;
    }
    if (findCode.user) {
        ctx.body = {
            code: 0,
            msg: "注册失败 邀请码已使用过",
        }
        return;
    }

    const result = await user.save();


    //更新已发放邀请码的用户id
    findCode.user = result._id;
    findCode.meta.updateAt = new Date().getTime();

    await findCode.save();

    ctx.body = {
        code: 1,
        msg: "注册成功",
        data: result,
    }
})

router.post('/login', async (ctx) => {
    const { account, password } = getBody(ctx);

    const user = await User.findOne({
        account,
    }).exec();

    if (!user) {
        ctx.body = {
            code: 0,
            msg: '登陆失败 用户名找不到',
            data: null,
        }
        return;
    }

    if (user.password == password) {
        ctx.body = {
            code: 1,
            msg: "登陆成功",
            data: {
                user: {
                    // account: user.account,
                    account: user['account'],
                    _id: user._id,
                },
                token: jwt.sign({
                    account: user.account,
                    _id: user._id,
                }, 'book-mgr')
            }
        }
    } else {
        ctx.body = {
            code: 0,
            msg: "密码错误"
        }
    }

})

module.exports = router;