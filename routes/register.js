var express = require('express');
var router = express.Router();

var m_user = require("../models/user");


router.get('/signup', function(req, res, next) {
    res.render('register', { title: 'Please fill the form:' });
});

router.post('/register', function(req, res, next) {

    m_user.createUser(req.body.name, req.body.email, function(result){
        console.log(result);
    });



});

module.exports = router;
