const createUser = require('../models/UserModel');
const { HTTP_OK_STATUS } =  require('../utils/statusHttp');

const createNewUser = async ( req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newUser = await createUser({ firstName, lastName, email, password });
  res.status(HTTP_OK_STATUS).json(newUser);
}

module.exports = createNewUser;