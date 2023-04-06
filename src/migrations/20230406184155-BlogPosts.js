'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const BlogPostsTable = queryInterface.createTable("blog_posts", {
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
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true, 
      },

      published : {
        type:Sequelize.DATE,
      },
      updated : {
        type:Sequelize.DATE,
      }

    });

    return BlogPostsTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("blog_posts"),
};