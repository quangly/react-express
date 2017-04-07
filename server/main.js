var express = require('express');
var bodyParser = require('body-parser');

var app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
        res.render('./../app/index.ejs',{});

    })
    .listen(7777);
