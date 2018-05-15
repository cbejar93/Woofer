const router = require('express').Router();
const db = require('./../models');

router.get('/getproposalsRentee/:id', function(req, res) {
    console.log(req.params.id)
    db.Proposal.findAll({
        where: {
            rentee_id: req.params.id
        }
    }).then(results => res.send(results));
});

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