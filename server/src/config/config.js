const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root1234',
    database: 'prueba_tps'
});

db.connect(function(err) {
    if(err) throw err;
    console.log('Base de datos conectada')
});

module.exports = db;
