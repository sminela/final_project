var conn = require('./connection');
const bcrypt = require('bcrypt');

module.exports = {
    register: function (req, res) {
        const user = req.body;
        conn.query('INSERT INTO USER SET ?', [user], function (err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json(results.insertId);
        });
    },

    login: function (req, res) {
        const user = req.body;
        conn.query('SELECT * FROM USER WHERE username = ? and password = ?', [user.username, user.password], function (err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json(results[0]);
        });
    },

    getAllUsers: function (req, res) {
        conn.query("SELECT * FROM USER where role='USER'", function (err, results) {
            if(err) return res.send(err);
            res.status(200).json(results);
        })
    },

    getUsersCount: function(req, res){
        conn.query("SELECT COUNT (*) as usersNumber FROM user WHERE role='USER'", function(err, results){
            if(err) return res.send(err);
            res.status(200).json(results);
        });
    },

    removeUser: function (req, res) {
        const id = req.query.id;
        conn.query('DELETE FROM user WHERE id=?', [id], function (err, results) {
            if(err) return res.status(500).send(err);
            res.status(200).json({message: 'Uspjesno obrisan korisnik'})
        })
    },


};