module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define(
    'Post_Category',
    {},
    { 
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    },
  );

  PostsCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPosts, {
      as: 'blog_posts',
      through: PostsCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.BlogPosts.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };

  return PostsCategories;
};
