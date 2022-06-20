const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define("User", {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {as: 'blogpost', foreignKey: 'userId'});
  }

  return UserTable;
};

module.exports = UserSchema;