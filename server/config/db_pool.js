var mysql = require('mysql');
var config = require('./db_config');

var db_pool =  mysql.createPool(config);

module.exports = db_pool ;