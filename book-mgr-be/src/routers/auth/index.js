// import { Router } from '@koa/router'
const Router = require('@koa/router')
const mongoose = require('mongoose')

const User = mongoose.model('user')

const router = new Router({
    prefix: '/auth'
})

router.post('/register', async (ctx) => {
    const { account, password } = ctx.request.body;
    const user = new User({
        account,
        password,
    })
    const one = await User.findOne({
        account
    }).exec();

    // console.log(await User.find())

    if (one) {
        ctx.body = {
            code: 0,
            msg: "注册失败 用户已存在",
        }

        return;
    }

    const result = await user.save();
    ctx.body = {
        code: 1,
        msg: "注册成功",
        data: result,
    }
})

router.post('/login', async (ctx) => {
    const { account, password } = ctx.request.body;

    console.log('account=>', account);

    const user = await User.findOne({
        account,
    }).exec();

    console.log('user=>', user)

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
            data: user
        }
    } else {
        ctx.body = {
            code: 0,
            msg: "密码错误"
        }
    }

})

module.exports = router;