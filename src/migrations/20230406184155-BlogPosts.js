'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const blogPostsTable = queryInterface.createTable("blog_posts", {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true, 
      },
    });

    return blogPostsTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("blog_posts"),
};