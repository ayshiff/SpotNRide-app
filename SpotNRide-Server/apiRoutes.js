let express = require('express')
var usersCtrl = require('./routes/usersCtrl')
var markersCtrl = require('./routes/markersCtrl')

exports.router = (function(){
    let apiRouter = express.Router();

    apiRouter.route('/users/register/').post(usersCtrl.register)
    apiRouter.route('/users/login/').post(usersCtrl.login)
    apiRouter.route('/Markers/').get(markersCtrl.markers)

    return apiRouter
})()
