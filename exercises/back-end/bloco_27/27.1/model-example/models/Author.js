// models/Author.js

const connection = require('./connection');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
    const { id, firstName, middleName, lastName } = authorData;

    const fullName = [firstName, middleName, lastName]
        .filter((name) => name)
        .join(' '); // O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

    return {
        id,
        firstName,
        middleName,
        lastName,
        name: fullName,
    };
};

// Converte o nome dos campos de snake_case para camelCase

const convertFields = (authorData) => ({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name});

// Busca todos os autores do banco.

const getAll = async () => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    return authors.map(convertFields).map(getNewAuthor);
};

module.exports = {
    getAll,
};