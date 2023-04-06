'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UsersTable = queryInterface.createTable("users", {
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
        type: Sequelize.STRING,
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });

    return UsersTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("users"),
};