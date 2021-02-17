// import router from './auth'
const router = require('./auth')
module.exports = (app) => {
    app.use(router.routes())
}