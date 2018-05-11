const router = require('express').Router();
const db = require('./../models');

// Get all dogs

router.get('/getDogs', (req, res) => {
    db.Dog.findAll()
    .then(results => {res.send(results)})
});





module.exports = router; 