const koa = require('koa');
const app = new koa();
const Body = require('koa-body')
const cors = require("@koa/cors")
const { connect } = require('./src/db');
const registryRoutes = require('./src/routers')

connect().then(() => {

    app.use(cors())
    app.use(Body());
    registryRoutes(app);

    app.listen(3000, () => {
        console.log('服务开始运行...')
    })

})
