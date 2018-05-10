// REQUIRED DEPENDENCIES
const Sequelize = require('sequelize');

// PASSWORDS TABLE
// ADD ASSOCIATION FOREIGN KEY WITH USERS
const Passwords = sequelize.define('password', {
    id: {
        type: sequelize.INTEGER
    },
    password: {
        type: Sequelize.STRING
      }
});