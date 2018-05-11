const router = require('express').Router();
const db = require('./../models');

router.get('/getproposals/:renter_id/:rentee_id', function(req, res) {
    var renterId = req.params.renter_id;
    var renteeId = req.params.rentee_id;
    db.Proposal.findAll({
        where: {
            renter_id: renterId,
            rentee_id: renteeId
        }
    }).then(results => res.send(results));
});

router.post('/createprop', function(req, res) {
    var dogId = req.body.dogId;
    var renterId = req.body.renterId;
    var renteeId = req.body.renteeId;
    var meetAddress = req.body.meetAddress;
    console.log(dogId);
    db.Proposal.create({
        dogId: dogId,
        renter_id: renterId,
        rentee_id: renteeId,
        meetAddress: meetAddress,
        state: 0
    }).then(results => res.send(results));   
});

// router.put('/updateprop/:state', function(req, res) {
//     var state = req.params.state;
//     console.log(state);
//     db.Proposal.update({
//         where: {
//             state: ''
//         }
//     }).then(results => res.send(results));
// });

router.put('/updateprop/:state/:userId', function(req, res){
    db.Proposal.update({
        state: req.params.state
    }, {
        where: {
            id : req.params.userId
        }
    }).then(results => res.send(results));
});


module.exports = router;  