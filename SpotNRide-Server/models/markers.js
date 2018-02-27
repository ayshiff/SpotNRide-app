'use strict';
module.exports = (sequelize, DataTypes) => {
  var Markers = sequelize.define('Markers', {
    Markers_latlng_latitude: DataTypes.NUMERIC,
    Markers_latlng_longitude: DataTypes.NUMERIC,
    Markers_title: DataTypes.CHAR
  }, {timestamps: false});
  Markers.associate = function(models) {
    // associations can be defined here
  };
  return Markers;
};