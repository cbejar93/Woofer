const router = require("express").Router();
const db = require("./../models");

router.post("/add_dog", (req, res) => {
  const newDog = req.body.formData;

    db.Dog.create(newDog).then(results => res.send(results));

});

// where user_id = id
router.get("/dogs/:id", (req, res) => {
  console.log(req.params.id);

  db.Dog.findAll({
    where: {
      userId: req.params.id
    }
  }).then(results => res.json(results));
});

router.get('/getDogsById/:id', (req, res) => {
  const id = req.params.id; 
  db.Dog.findOne({
      where: {
          id: id
      }
  })
  .then(results => res.json(results));
});

module.exports = router;
