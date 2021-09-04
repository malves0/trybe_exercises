const { isValidFirstname } = require('express-validations');
const { UNAUTHORIZED } =  require('../utils/statusHttp');

const validateFirstName = (req, res, next) => {
  const { firstName } = req.body;
  if(!isValidFirstname(firstName)) {
    return res.status(UNAUTHORIZED).json({ 'message': 'First name is required'})
  }
  next();
}

module.exports = validateFirstName;