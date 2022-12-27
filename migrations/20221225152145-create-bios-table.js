'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bios', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        }
      },
      country_of_birth: DataTypes.STRING,
      current_nationality: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      place_of_residence: DataTypes.STRING,
      image_url: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bios');
  }
};
