module.exports = function(sequelize, DataTypes) {
  // REQUIRED DEPENDENCIES
  const Sequelize = require("sequelize");

  // USERS TABLE
  // ADD ASSOCIATION FOREIGN KEY TO USERS
  const Thread = sequelize.define("Thread", {
    subject: {
      type: Sequelize.STRING,
      validate: {
        notNull: true
      }
    },
  });

  Thread.associate = function(models) {
    Thread.hasMany(models.Message, {
      onDelate: "cascade"
    })
  }
  return Thread;

};
