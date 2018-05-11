const router = require('express').Router();
const db = require('./../models');
const bcrypt = require('bcryptjs');

router.post('/add_user', (req,res) => {
    const firstName = req.body.formData.first_name; 
    const lastName = req.body.formData.last_name; 
    const email = req.body.formData.email; 
    const zip = req.body.formData.zipcode; 
    const type = req.body.formData.type; 
    let password = req.body.formData.password;
    const passwordOne  = req.body.formData.password_one; 
    const imgUrl = req.body.formData.img_url; 
    console.log(req.body)
    if(password === passwordOne) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if(err) throw err;
                password = hash;
                db.User.create({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    zip: zip,
                    type: type,
                    password: password,
                    imgPath: imgUrl 
                })
                .then(results => res.json({
                    msg: "success", 
                    status: 201
                }));

            });
        
        });
    } else {
        res.json({
            msg: "passwords did not match!",
            status: 400
        })
    }
});


router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password; 
    db.User.findOne({
        where: {
            email: email
        }
    })
    .then(result => {
        const hashed = result.dataValues.password;
        return bcrypt.compare(password, hashed)
    })
    .then( bool => res.send(bool));
});

module.exports = router;