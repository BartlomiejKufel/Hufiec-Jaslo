var express = require('express');
var router = express.Router();


const Hufiec = require('../models/Druzyna')





router.get('/cichociemni', async function(req, res, next) {
    //komenda do znalezienia id drużyny 
    //db.hufiec.findOne({name:{$regex:"tu wpisać numer"}},{_id:1})
    const druzyna = await Hufiec.find({name:{$regex:"166"}});

    res.render('druzyna', {
        title: "166DH | Hufiec Jasło",
        druzyna:druzyna 
    })
});


module.exports = router;
