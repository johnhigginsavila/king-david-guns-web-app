var express = require('express');
var router = express.Router();
var db = require('../database/database');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');


//GET ENDPOINTS
router.get('/db', function(req, res, next){
    var query = "SELECT * FROM table_test";
    db.query(query).spread(function(result, metadata){
        res.json({data:result});
    }).catch(function(err){
        res.status(500).send("Unable to query at this time, ERROR1: "+err);
    })
})


//EXPORTING ROUTER
module.exports = router;