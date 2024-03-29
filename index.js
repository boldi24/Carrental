/**
 * Created by Boldizsar Tompe on 2/26/2017.
 */

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));

app.use(function (req, res, next) {
    res.tpl = {};
    return next();
});

/**
 * Include all the routes
 */
require('./routes/clients')(app);
require('./routes/cars')(app);
require('./routes/main')(app);

/**
 * Standard error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('Error:' + err);

    //Flush out the stack to the console
    console.error(err.stack);
});

//app.use(express.static('static'));

var server = app.listen(3000, function () {
    console.log('Server is listening on 3000...');
});
