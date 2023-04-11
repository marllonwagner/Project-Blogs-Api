module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        allowNull: false,
        
      },
      title: DataTypes.STRING,
      content:DataTypes.STRING,
      published:DataTypes.DATE,
      updated:DataTypes.DATE,
    },
    { 
      timestamps: true,
      updatedAt: 'updated',
      createdAt: 'published',
      tableName: 'blog_posts',
      underscored: true,
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });

    BlogPost.hasMany(models.PostCategory, { foreignKey: 'id', as: 'posts_categories' });
  };

  return BlogPost;
};
