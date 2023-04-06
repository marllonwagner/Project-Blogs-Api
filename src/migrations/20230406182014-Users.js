'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersTable = queryInterface.createTable("Users", {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      display_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });

    return usersTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Users"),
};