let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
let models = require('../models')

module.exports = {
    
    login: function(req, res){

    },

    register: function(req, res){
        let email = req.body.email
        let password = req.body.password

        if(email == null || password == null){
            return res.status(400).json({'error': 'missing parameters'})
        }


    }
}