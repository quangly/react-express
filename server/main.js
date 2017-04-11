var express = require('express');
var parser = require('body-parser');
var React = require('react/addons');

var GroceryItem = require('./models/GroceryItem.js');

require('babel/register');
require('./database.js');

var app = new express();
//app.use(parser.json());
//app.use(parser.urlencoded({
//    extended: true
//}));

app.get('/', function (req, res) {
        //res.render('./../app/index.ejs', {});
    var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));
    GroceryItem.find(function(error, doc){
        var generated = React.renderToString(application({
            items:doc
        }));
        res.render('./../app/index.ejs', {reactOutput: generated});
    })
})
    .use(express.static(__dirname + '/../.tmp'))
    .use(express.static(__dirname + '/../'))
    .listen(7777);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/items.js')(app);