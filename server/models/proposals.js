
module.exports = function(sequelize, DataTypes) {
  // USERS TABLE
  // ADD ASSOCIATION FOREIGN KEY TO DOGS
  const Proposal = sequelize.define("Proposal", {
    dogId: DataTypes.INTEGER,
    renter_id: DataTypes.INTEGER,
    rentee_id: DataTypes.INTEGER,
    meetAddress: DataTypes.STRING,
    state: DataTypes.INTEGER
  });


  return Proposal;
};
