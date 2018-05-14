const express = require('express'), 
db = require('./../models'),
router = express.Router(),
multer = require('multer');

// SET STORAGE ENGINE
const storage = multer.diskStorage({
    dest: __dirname + '../public/uploads',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// UPLOAD
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
}).single('imgPath');
console.log(upload + "doggie")

// CHECK FILE TYPE
function checkFileType(file ,cb) {
    const fileTypes = jpeg|jpg|png|gif;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname) {
        return cb(null,true);
    } else {
        cb('Error: Images Only!');
    }
}

const app = express();

router.use(express.static('./public'));

router.post('/upload', upload, function(req, res) {
    upload(req, res, (err) => {
        if (err) {
            throw err;
            // res.render('dogs', {
            //     msg: err
            // });
        } else {
            if (req.file == undefined) {
                // res.render('dogs')
            }
        }
    })
    // try {
    //     // const col = await loadCollection(, db.dogs);
    //     const data = db.dogs.drop(req.file).then().catch(error => {
    //         res.send(error);
    //     });

    //     db.dogs.saveDatabase();
    //     res.send(true);
    // } catch (err) {
    //     res.sendStatus(400);
    // }
    console.log('uploaded');
});

module.exports = router;