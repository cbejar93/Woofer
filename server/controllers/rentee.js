const router = require("express").Router();
const db = require("./../models");
var formidable = require("formidable");

// Route to add a dog

router.post("/add_dog", (req, res) => {
  const newDog = req.body.formData;
  const form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
      console.log(files)
  });
  console.log(newDog, "asdf");
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

module.exports = router;
