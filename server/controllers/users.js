const router = require('express').Router();
const db = require('./../models');
const bcrypt = require('bcryptjs');

router.post('/add_user', (req,res) => {
    const firstName = req.body.first_name; 
    const lastName = req.body.last_name; 
    const email = req.body.email; 
    const zip = req.body.zipcode; 
    const type = req.body.type; 
    let password = req.body.password;
    const passwordOne  = req.body.password_one; 
    const imgUrl = req.body.img_url; 
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
                .then(results => res.send(results));

            });
        
        });
    } else {
        res.json({
            msg: "passwords did not match!"
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