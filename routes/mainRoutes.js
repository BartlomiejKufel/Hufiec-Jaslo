var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: "Hufiec ZHP Jasło" })
});

router.get('/kontakt', function(req, res, next) {
  res.render('contact', {
    title: "Kontakt | Hufiec Jasło",
    address: "ul. Kopernika 8, 38-200 Jasło",
    phoneNumber: "796 300 897",
    email: "jaslo@zhp.pl"
    })
});


router.get('/kadra', function(req, res, next) {
  res.render('cadre', {
    title: "Kadra | Hufiec Jasło",
    
    })
});


module.exports = router;
