var db_pool = require('../config/db_pool');


var Tasks = {
    list: function (callback) {
        db_pool.query('SELECT * FROM users', callback);
    },
    change: function (text, callback) {
        // db_pool.query('UPDATE users SET name = :name WHERE id = :id',
        //     {id: id, name: text.name});
        db_pool.query('UPDATE users SET name = ?, age = ?, married = ? WHERE id = ?',
            [text.name, text.age, text.married, text.id], callback);
    },

    getById: function (id, callback) {
        db_pool.query('SELECT * FROM users WHERE id = ?', [id], callback)
    },

    delete: function (id, callback) {
        db_pool.query('DELETE FROM users WHERE id = ?', [id], callback)
    }
};

module.exports = Tasks;