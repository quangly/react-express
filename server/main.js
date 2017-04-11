var express = require('express');
var parser = require('body-parser');


require('./database.js');

var app = new express();
//app.use(parser.json());
//app.use(parser.urlencoded({
//    extended: true
//}));

app.get('/', function (req, res) {
        res.render('./../app/index.ejs', {});
    })
    .use(express.static(__dirname + '/../.tmp'))
    .use(express.static(__dirname + '/../'))
    .listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/items.js')(app);