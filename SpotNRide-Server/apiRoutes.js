let express = require('express')
var usersCtrl = require('./routes/usersCtrl')

exports.router = (function(){
    let apiRouter = express.Router();

    apiRouter.route('/users/register/').post(usersCtrl.register)
    apiRouter.route('/users/login/').post(usersCtrl.login)

    return apiRouter
})()
