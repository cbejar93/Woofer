module.exports = function(sequelize, DataTypes) {
  // REQUIRED DEPENDENCIES
  const Sequelize = require("sequelize");

  // USERS TABLE
  // ADD ASSOCIATION FOREIGN KEY TO USERS
  const Dog = sequelize.define("Dog", {
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    age: {
      type: Sequelize.DATE, 
      allowNull: true
    },
    character: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    breed: {
      type: Sequelize.STRING,
      allowNull: true
    },
    userId: {
      type: Sequelize.INTEGER
    },
    imgPath: {
      type: Sequelize.STRING,
      defaultValue: "/../../woofer_client/src/assets/images/blankDog.png",
      allowNull: true
    }
  });
  return Dog;
  
};
