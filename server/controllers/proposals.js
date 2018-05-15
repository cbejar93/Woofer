const router = require('express').Router();
const db = require('./../models');

// This sends information so that users can see what proposal for woof hangout they have 

router.get('/getproposalsRentee/:id', function(req, res) {
    console.log(req.params.id)
    db.Proposal.findAll({
        where: {
            $or :{
                rentee_id: req.params.id,
                renter_id: req.params.id
            }
        } 
    }).then(results => res.send(results));
});
// This creates a Woof proposal 
router.post('/createprop', function(req, res) {
    const proposal = req.body.formData;
    db.Proposal.create(proposal).then(results => res.send(results));   
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

router.put('/updateprop/:state/:Id', function(req, res){
    db.Proposal.update({
        state: req.params.state
    }, {
        where: {
            id : req.params.Id
        }
    }).then(results => res.send(results));
});


module.exports = router;  