module.exports = function(sequelize, DataTypes) {
  // REQUIRED DEPENDENCIES
  const Sequelize = require("sequelize");

  // USERS TABLE
  // ADD VALIDATION
  const Users = sequelize.define("user", {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    zip: {
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.INTEGER
    },
    password: {
      type: Sequelize.STRING
    },
    imgPath: {
      type: Sequelize.STRING
    }
  });
  return Users;
};
