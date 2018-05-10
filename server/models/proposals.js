// REQUIRED DEPENDENCIES
const Sequelize = require('sequelize');

// USERS TABLE
// ADD ASSOCIATION FOREIGN KEY TO DOGS
const Proposals = sequelize.define('proposal', {
    dogId: {
        type: sequelize.INTEGER
    },
    renter_id: {
      type: Sequelize.INT
    },
    rentee_id: {
      type: Sequelize.INT
    },
    meetAddress: {
    type: Sequelize.STRING
    },
    state: {
    type: Sequelize.INT
    }
  });