const router = require('express').Router();
const db = require('./../models');



// Route to add a dog 

router.post('/add_dog', (req,res) => {
    const newDog = req.body; 
    db.Dog.create(newDog)
    .then(results => res.send(results));
});



module.exports = router; 