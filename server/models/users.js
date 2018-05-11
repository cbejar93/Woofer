module.exports = function(sequelize, DataTypes) {
  // REQUIRED DEPENDENCIES
  const Sequelize = require("sequelize");

  // USERS TABLE
  // ADD VALIDATION
  const User = sequelize.define("User", {
    firstName: {
      type: Sequelize.STRING,
      validate: {
        notNull: true
      }
    },
    lastName: {
      type: Sequelize.STRING,
      validate: {
        notNull: true
      }
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    zip: {
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.INTEGER
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        len: [1, 5]
      }
    },
    imgPath: {
      type: Sequelize.STRING
    }
  });
  return User;
};
