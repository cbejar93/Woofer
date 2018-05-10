// REQUIRED DEPENDENCIES
const Sequelize = require('sequelize');

// USERS TABLE
// ADD ASSOCIATION FOREIGN KEY TO USERS
const Dogs = sequelize.define('dog', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    tempermant: {
        type: Sequelize.STRING
    },
    breed: {
    type: Sequelize.STRING
    },
    userId: {
        type: sequelize.INTEGER
    },
    imgPath: {
        type: Sequelize.STRING
    }
  });