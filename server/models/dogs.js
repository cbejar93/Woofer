module.exports = function(sequelize, DataTypes) {
  // REQUIRED DEPENDENCIES
  const Sequelize = require("sequelize");

  // USERS TABLE
  // ADD ASSOCIATION FOREIGN KEY TO USERS
  const Dog = sequelize.define("Dog", {
    name: {
      type: Sequelize.STRING,
      validate: {
        notNull: true
      }
    },
    age: {
      type: Sequelize.INTEGER,
      validate: {
        isInt: true
      }
    },
    temperament: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    breed: {
      type: Sequelize.STRING,
      validate: {
        notNull: true
      }
    },
    userId: {
      type: Sequelize.INTEGER
    },
    imgPath: {
      type: Sequelize.STRING,
      defaultValue: "/../../woofer_client/src/assets/images/blankDog.png",
      validate: {
        notNull: false
      }
    }
  });
  return Dog;
  
};
