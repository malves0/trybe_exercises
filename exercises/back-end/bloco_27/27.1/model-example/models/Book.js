const connection = require('./connection');

const getAll = async () => {
    const [books] = await connection.execute(
        'SELECT * FROM model_example.books;',
    );
    return books.map(({ id, title, author_id }) => ({
        id,
        title,
        authorId: author_id,
    }));
};

const getByAuthorId = async (authorId) => {
    const query = 'SELECT * FROM model_example.books WHERE author_id=?;'
    const books = await connection.execute(query, [authorId]);
    // O caractere ? na query será substituído pelo authorId que informamos no array [authorId] .
    return books.map(({ id, title, author_id}) => 
     ({
        id,
        title,
        authorId: authot_id,
    }));
};

module.exports = {
    getAll,
};