const router = require('express').Router();
const db = require('../models');

router.get('/getproposals/:renter_id/:rentee_id', function(req, res) {
    var renterId = req.params.renter_id;
    var renteeId = req.params.rentee_id;
    db.Proposal.findAll({
        where: {
            renter_id: renter_id,
            rentee_id: rentee_id
        }
    }).then(results => res.send(results));
});

router.post('/createprop', function(req, res) {
    var dogId = req.body.dogId;
    var renterId = req.body.renterId;
    var renteeId = req.body.renteeId;
    var meetAddress = req.body.meetAddress;
    console.log(db);
    db.Proposal.create({
        dogId: dogId,
        renterId: renterId,
        renteeId: renteeId,
        meetAddress: meetAddress,
        state: 0
    }).then(results => res.send(results));
   
})


module.exports = router;  