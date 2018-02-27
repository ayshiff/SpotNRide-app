let bcrypt = require('bcrypt')
let jwUtils = require('../utils/jwt.utils')
let models = require('../models')

module.exports = {
    markers: function(req, res){
        let markers = req.body.markers

        models.Markers.findAll()

        .then(function(markersFounded){
            if(markersFounded){

                        return res.status(200).json({
                            'markers': markersFounded
                        })
                    

            } else {
                return res.status(404).json({'error': 'markers not exist in DB'})
            }
        })

        .catch(function(error){
            return res.status(400).json({'error': error.message})
        })
        
    },
    addMarker: function(){
        
    }
}