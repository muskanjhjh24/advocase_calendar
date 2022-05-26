const router = require("express").Router();

const moment = require('moment');

const Event= require("../calendar/models/events");
router.post('/create-event', async(req,res)=>{

    const event = Event(req.body);
    await event.save();
    res.sendStatus(201);




})

router.get('/get-event',async(req,res)=>{
    const event = await Event.find({start:{$gte: moment(req.query.start).toDate()},end: {$lte:moment(req.query.end).toDate()}
 });

 res.send(event);
});



module.exports = router;