//importadando o modulo mysql2/promise
const mysql = require('mysql2/promise');

//configuração da pool de conexão com mysql
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'app_eventos',
});

module.exports = pool;