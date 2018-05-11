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
      validate: {
        notNull: false
      }
    }
  });
  return Dog;
  
};
