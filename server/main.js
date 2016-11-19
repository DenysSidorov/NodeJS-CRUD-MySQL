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

        res.render('index', {
            title: 'List Users',
            users: result
        });
    });
});

app.delete('/:id', function (req, resp) {
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



















app.get('/:id', function (req, resp) {
    var user = {};
    model_users.getById(req.params.id, function (err, result) {
        if (err) throw err;
        user.id = result[0].id;
        user.name = result[0].name;
        user.age = result[0].age;
        user.married = result[0].married;

        console.log('get - /:id', user);
        resp.render('edit', {user: user});

    });
});

app.post('/:id', function (req, resp) {


    var user = req.body;
    console.log(' post - /:id', user,'  ', req.body);
    model_users.change(user, function (err, result) {
        if (err) throw err;
        console.log(user, ' user');
        model_users.list(function (err, result) {
            if (err) throw err;
            resp.redirect('/');
        });

    });

});

// app.post('/', function (req, res) {
//     tasks.add(req.body.task, function () {
//         res.redirect('/');
//     });
// });

// app.put('/:id', function (req, resp) {
//
//     var user = {};
//     model_users.getById(req.params.id, function (err, result) {
//         if (err) throw err;
//
//         user.id = result[0].id;
//         user.name = result[0].name;
//         user.age = result[0].age;
//         user.married = result[0].married;
//
//
//     });
//     resp.render('edit', {
//         user: user
//     });
// });

app.listen(8080);
console.log('Express server listening on port 8080');