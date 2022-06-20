const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("Category", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  CategoryTable.associate = (models) => {
    CategoryTable.hasMany(models.PostCategory, {as: 'category', foreignKey: 'categoryId'});
  }

  return CategoryTable;
};

module.exports = CategorySchema;