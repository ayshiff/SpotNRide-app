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
    addMarker: function(req, res){
        let latitude = req.body.Markers_latlng_latitude
        let longitude = req.body.Markers_latlng_longitude
        let title = req.body.Markers_latlng_title

        if(latitude == null || longitude == null || title == null){
            return res.status(400).json({'error': 'missing parameters'})
        }

        models.Markers.findOne({
            attributes: ['Markers_title'],
            where: {Markers_title: title}
        })
        .then(function(foundedMarker){
            if(!foundedMarker){
                var newMarker = models.Markers.create({
                    Markers_latlng_latitude: latitude,
                    Markers_latlng_longitude: longitude,
                    Markers_title: title
                })

                .then(function(newMarker){
                    return res.status(201).json({
                        'MarkerId': newMarker.id
                    })
                })
                .catch(function(error){
                    return res.status(400).json({'error': 'error user'})
                })

            } else {
                return res.status(400).json({'error': 'marker already exist'})
            }
        })

        .catch(function(error){
            return res.status(400).json({'error': error.message})
        })
    },

    deleteMarker: function(req, res){
        let MarkerId = req.body.MarkerId

        models.Markers.destroy({
            attributes: ['id'],
            where: {id :MarkerId}
        })
        .then(function(MarkerDeleted){
            return res.status(201).json({
                'MarkerId': MarkerDeleted.id
            })
        })
        .catch(function(){
            return res.status(400).json({'error': 'error marker delete'})
        })

    }
}