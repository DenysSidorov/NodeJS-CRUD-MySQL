var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser());

var model_users = require('./models/tasks');

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());

// add stic files
app.use(express.static(__dirname + '/views'));

var templating = require('consolidate');
app.engine('jade', templating.jade);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views'); // + '/views'


app.get('/', function (req, res) {
    model_users.list(function (err, result) {
        console.log(result);
        res.render('index', {
            title: 'List Users',
            users: result
        });
    });
});

app.post('/:id', function (req, resp) {
    console.log(req.params.id);
    model_users.delete(req.params.id, function (err, result) {
        if (err) throw err;
        console.log('deleted ' + result.affectedRows + ' rows');
    });
    model_users.list(function (err, result) {
        resp.render('index', {
            title: 'List Users',
            users: result
        });
    });
});


app.listen(8080);
console.log('Express server listening on port 8080');