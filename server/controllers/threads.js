const router = require('express').Router();
const Promise = require('bluebird')
const db = require('./../models');

router.get("/threads/:userId", function (req, res){
    db.Thread.findAll({
        where: { userId: req.params.userId}
    }).then(function(dbThreads){
        res.json(dbThreads);
    })
})

router.post("/threads", function(req,res){
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
