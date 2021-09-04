const connection = require('./connection');

function createUser({ firstName, lastName, email, password }) {
  return connection()
    .then((db) => db
      .collection('users')
      .insertOne({ firstName, lastName, email, password }))
      .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

module.exports = createUser;
