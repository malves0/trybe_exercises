const mysql = require('mysql2/promise');

// o método createPool cria uma pool de conexões com o banco de dados
const connection = mysql.createPool({
    host: 'localhost', // loca onde o servidor do MYSQL está armazenado
    user: 'malvs', // usuario de acesso ao banco
    password: 'code2021',
    database: 'model_example' // nome do banco que ira de conectar
});

module.exports = connection;

// retorna um objeto Pool representando uma sessão com o banco