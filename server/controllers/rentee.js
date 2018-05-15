const router = require("express").Router();
const db = require("./../models");
const multer = require("multer");
const path = require("path");

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: "../public/uploads/",
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
}).single("myImage");

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Route to add a dog

router.post("/add_dog", (req, res) => {
  const newDog = req.body.formData;
  upload(req, res, err => {
    if (err) {
     res.send();
    } 
    db.Dog.create(newDog).then(results => res.send(results));
  });

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
