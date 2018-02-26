let jwt = require('jsonwebtoken')

const JWT_SIGN_SECRET = 'rYERXjwHbBJtdjfB2TfMUrKXFL0POzmx'

module.exports = {
    generateTokenForUser: function(userData){
        return jwt.sign({
            userId: userData.id
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        }
    )
    }
}