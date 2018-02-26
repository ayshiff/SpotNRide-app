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

        models.User.findOne({
            attributes : ['email'],
            where: {email: email}
        })
        .then(function(userFounded){
            if(!userFounded){

                bcrypt.hash(password, 5, function(err, bcryptPassword){
                    var newUser = models.User.create({
                        email: email,
                        password: bcryptPassword
                    })
                })
                .then(function(newUser){
                    return res.status(201).json({
                        'userId': newUser.id
                    })
                })
                .catch(function(error){
                    return res.status(400).json({'error': 'error user'})
                })


            } else {
                return res.status(400).json({'error': 'user already exist'})
            }

        })
        .catch(function(error){
            return res.status(400).json({'error': 'unable to find user '})
        })


    }
}