var express = require ('express');
var router = express.Router();
var burger = require('../models/burgers.js');

router.get('/', function(req, res){
    burger.all(function(burger_data){
        console.log(burger-data);
        res.render('index');
    })
})

module.exports = router;
