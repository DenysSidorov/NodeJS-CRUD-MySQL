var db_pool = require('../config/db_pool');


var Tasks = {
    list: function (callback) {
        db_pool.query('SELECT * FROM users', callback);
    },

    add: function (task, callback) {
        db_pool.query('INSERT INTO users SET ?', {
            name: task,
            age: 10,
            married: 1
        }, callback);
    },

    change: function (id, text, callback) {
        // TODO
    },

    complete: function (id, callback) {
        // TODO
    },

    delete: function (id, callback) {
        db_pool.query('DELETE FROM users WHERE id = ?', [id], callback)
    }
};

module.exports = Tasks;