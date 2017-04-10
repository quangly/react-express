var express = require('express');
var bodyParser = require('body-parser');

var app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
        res.render('./../app/index.ejs', {});
    })
    .use(express.static(__dirname + '/../.tmp'))
    .use(express.static(__dirname + '/../'))
    .listen(7777);
