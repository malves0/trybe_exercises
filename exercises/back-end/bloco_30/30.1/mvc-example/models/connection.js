const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'code2021',
  database: 'mvc_example',
});

module.exports = connection;