module.exports = function(sequelize, DataTypes) {
  // REQUIRED DEPENDENCIES
  const Sequelize = require("sequelize");

  // USERS TABLE
  // ADD ASSOCIATION FOREIGN KEY TO USERS
  const UserThread = sequelize.define("UserThread", {
  });

  UserThread.associate = function(models) {
    models.User.belongsToMany(models.Thread, {
      through: {
        model: UserThread,
        unique: false,
      }
    });
    models.Thread.belongsToMany(models.User, {
        through: {
          model: UserThread,
          unique: false,
        }
    });
  }
  return UserThread;

};
