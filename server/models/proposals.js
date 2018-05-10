module.exports = function(sequelize, DataTypes) {
  // REQUIRED DEPENDENCIES
  const Sequelize = require("sequelize");

  // USERS TABLE
  // ADD ASSOCIATION FOREIGN KEY TO DOGS
  const Proposals = sequelize.define("proposal", {
    dogId: {
      type: Sequelize.INTEGER
    },
    renter_id: {
      type: Sequelize.INTEGER
    },
    rentee_id: {
      type: Sequelize.INTEGER
    },
    meetAddress: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.INTEGER
    }
  });

  return Proposals;
};
