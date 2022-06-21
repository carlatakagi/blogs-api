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
      {through: models.PostCategory, foreignKey: 'postId', otherKey: 'categoryId'}
    );

    models.BlogPost.belongsToMany(models.Category,
      {through: models.PostCategory, foreignKey: 'categoryId', otherKey: 'postId'}
    );
  }

  return PostCategoryTable;
};

module.exports = PostCategorySchema;