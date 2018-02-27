'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Markers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Markers_latlng_latitude: {
        type: Sequelize.NUMERIC
      },
      Markers_latlng_longitude: {
        type: Sequelize.NUMERIC
      },
      Markers_title: {
        type: Sequelize.VARCHAR
      },
  /*    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      } */
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Markers');
  }
};