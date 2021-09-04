const { isValidFirstname, isValidLastname } = require('express-validations');
const { UNAUTHORIZED } =  require('../utils/statusHttp');

const validateFirstName = (req, res, next) => {
  const { firstName } = req.body;
  if(!isValidFirstname(firstName)) {
    return res.status(UNAUTHORIZED).json({ 'message': 'First name is required'})
  }
  next();
}

const validateLastName = (req, res, next) => {
  const { lastName } = req.body;
  if(!isValidLastname(lastName)) {
    return res.status(UNAUTHORIZED).json({ 'message': 'Last name is required'})
  }
  next();
}

module.exports = {validateFirstName, validateLastName };