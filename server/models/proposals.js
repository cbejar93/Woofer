  // REQUIRED DEPENDENCIES
const Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {


  // USERS TABLE
  // ADD ASSOCIATION FOREIGN KEY TO DOGS
  const Proposal = sequelize.define("proposal", {
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

  return Proposal;
};
