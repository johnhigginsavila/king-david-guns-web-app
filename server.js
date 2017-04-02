var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./server/database/database');
var jwt = require('jsonwebtoken');

process.env.SECRET = "MY SUPER SECRET KEY";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/client', express.static(__dirname+'/client'));

//Controller


//Routers
var databaseTesting = require('./server/routes/databaseTesting');

app.use('/databaseTesting',databaseTesting);

//Routes
app.get('/', function(req, res){
    res.sendFile(__dirname+'/client/index.html');
})



db.sync().then(function(){
    app.listen(5000, function(){
        console.log("Listening to port "+5000);
    })
})