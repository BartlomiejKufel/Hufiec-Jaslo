var express = require('express');
var router = express.Router();





router.get('/cichociemni', async function(req, res, next) {
    res.render('./druzyny/166', {
        title: "166DH | Hufiec Jasło",
        admin: "Kinga Plakut",
        adminEmail:"kinga.plakut@zhp.net.pl"
    })
});

router.get('/lisy', async function(req, res, next) {
    res.render('./druzyny/139', {
        title: "139DH | Hufiec Jasło",
        admin: "Gabriela Schmidt",
        adminEmail:"gabriela.schmidt@zhp.net.pl"
    })
});

router.get('/golesz', async function(req, res, next) {
    res.render('./druzyny/309', {
        title: "309DH | Hufiec Jasło",
        admin: "Paweł Konieczny",
        adminEmail:"pawel.konieczny@zhp.net.pl"
    })
});


router.get('/wilki', async function(req, res, next) {
    res.render('./druzyny/307', {
        title: "307DH | Hufiec Jasło",
        admin: "Robert Nowiński",
        adminEmail:"robert.nowinski@zhp.net.pl"
    })
});


router.get('/plomienie', async function(req, res, next) {
    res.render('./druzyny/15', {
        title: "15DH | Hufiec Jasło",
        admin: "Anna Śliwa",
        adminEmail:"anna.sliwa@zhp.net.pl"
    })
});




module.exports = router;
