let bcrypt = require('bcrypt')
let jwUtils = require('../utils/jwt.utils')
let models = require('../models')

module.exports = {
    
    login: function(req, res){
        let email = req.body.email
        let password = req.body.password

        if(email == null || password == null){
            return res.status(400).json({'error': 'missing parameters'})
        }

        models.User.findOne({
            where: {email: email}
        })

        .then(function(userFounded){
            if(userFounded){
                bcrypt.compare(password, userFounded.password, function(errBycrypt, resBycrypt){
                    if(resBycrypt){
                        return res.status(200).json({
                            'userId': userFounded.id,
                            'token': jwUtils.generateTokenForUser(userFounded)
                        })
                    }
                })
            } else {
                return res.status(404).json({'error': 'user not exist in DB'})
            }
        })

        .catch(function(error){
            return res.status(400).json({'error': error.message})
        })

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
            return res.status(400).json({'error': error.message})
        })


    }
}