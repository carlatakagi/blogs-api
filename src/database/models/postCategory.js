const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategory", {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    timestamps: false
  });

  PostCategoryTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      {as: 'blogposts', through: models.PostCategory, foreignKey: 'categoryId', otherKey: 'postId'}
    );

    models.BlogPost.belongsToMany(models.Category,
      {as: 'categories', through: models.PostCategory, foreignKey: 'postId', otherKey: 'categoryId'}
    );
  }

  return PostCategoryTable;
};

module.exports = PostCategorySchema;