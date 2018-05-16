const router = require('express').Router();
const Promise = require('bluebird')
const db = require('./../models');

// Is supposed to show all the threads a current user has

router.get("/threads/:userId", function (req, res){
    db.Thread.find({
        userId: req.params.userId
    }).then(function(dbThreads){
        res.json(dbThreads);
    })
})

// get user messages 


// This creates a new thread for both users and a message 
router.post("/threads", function(req,res){
    req.body = req.body.formData;
    db.Thread.create(req.body).then(function(dbThread){
        Promise.join(
             db.UserThread.create({ThreadId: dbThread.id, UserId: req.body.senderId}),
             db.UserThread.create({ThreadId: dbThread.id, UserId: req.body.recipientId}),
             db.Message.create({content: req.body.content, ThreadId: dbThread.id})
         ).then(function() {
           console.log("BLAH");
             res.json({threadId: dbThread.id});
         });
    });
});

module.exports = router;
