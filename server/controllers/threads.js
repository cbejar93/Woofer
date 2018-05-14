const router = require('express').Router();
const db = require('./../models');

router.get("/threads/:userId", function (req, res){
    db.Thread.findAll({
        where: { userId: req.params.userId}
    }).then(function(dbThread){
        res.json(dbThread);
    })
})

router.post("/threads", function(req,res){
    console.log("HELLO! " + JSON.stringify(req.body));
    db.Thread.create(req.body).then(function(dbThread){
        console.log("Thread! " + dbThread);
        // Promise.join(
        //     db.UserThread.create({ThreadId: dbThread.id, UserId: req.body.senderId}),
        //     db.UserThread.create({ThreadId: dbThread.id, UserId: req.body.recipientId}),
        //     db.Message.create({content: req.body.content, ThreadId: dbThread.id})
        // ).then(function() {
        //     res.send({threadId: dbThread.id});
        // })
    })
})

module.exports = router;