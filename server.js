// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');


// Set up Express
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false 
}));

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'

}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
app.use('/', routes);

var port = 3000;
app.listen(port);