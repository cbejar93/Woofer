module.exports = function(sequelize, DataTypes) {
  // REQUIRED DEPENDENCIES
  const Sequelize = require("sequelize");

  // USERS TABLE
  // ADD VALIDATION
  const User = sequelize.define("User", {
    firstName: {
      type: Sequelize.STRING,
      validate: {
      }
    },
    lastName: {
      type: Sequelize.STRING,
      validate: {
      
      }
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    zip: {
      type: Sequelize.INTEGER,
      validate: {
        isInt: true
      }
    },
    type: {
      type: Sequelize.INTEGER
    },
    password: {
      type: Sequelize.STRING,
      validate: {
        len: [1]
      }
    },
    imgPath: {
      type: Sequelize.STRING,
      defaultValue: "/../../woofer_client/src/assets/images/blankImg.png",
      validate: {
    
      }
    }
  });
  return User;
};
