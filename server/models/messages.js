module.exports = function(sequelize, DataTypes) {
  // REQUIRED DEPENDENCIES
  const Sequelize = require("sequelize");

  // USERS TABLE
  // ADD ASSOCIATION FOREIGN KEY TO USERS
  const Message = sequelize.define("Message", {
    content: {
      type: Sequelize.STRING,
      validate: {
        notNull: true
      }
    },
  });

  Message.associate = function(models) {
    Message.belongsTo(models.Thread, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return Message;

};
