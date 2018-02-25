let express = require('express')
var usersCtrl = require('./routes/usersCtrl')

exports.router = (function(){
    let apiRouter = express.Router();

    apiRouter.route('/users/register/').post(userCtrl.register)
    apiRouter.route('/users/login/').post(userCtrl.login)

    return apiRouter
})()
