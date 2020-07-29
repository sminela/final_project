var mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'root',
    password: 'root',
    port: 3306,
    host: 'localhost',
    database: 'zuteks'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Uspjesno konektovani');
    
});

module.exports = connection;