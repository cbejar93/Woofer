const router = require('express').Router();
const db = require('./../models');
const picture = require('./pictures.js');
const multer = require('multer');

// Route to add a dog 

router.post('/add_dog', (req,res) => {
    const newDog = req.body.formData; 
    
    console.log(newDog, 'asdf')
    db.Dog.create(newDog)
    .then(results => res.send(results));
});

// where user_id = id
router.get('/dogs', (req, res) => {
    db.Dog.findAll()
    .then(results => res.json(results));
});


module.exports = router; 