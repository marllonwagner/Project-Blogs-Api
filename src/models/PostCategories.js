module.exports = (sequelize, _DataTypes) => {
  const postsCategories = sequelize.define(
    'Post_Category',
    {},
    { 
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    },
  );

  postsCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPosts, {
      as: 'blog_posts',
      through: postsCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.BlogPosts.belongsToMany(models.Category, {
      as: 'categories',
      through: postsCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };

  return postsCategories;
};
