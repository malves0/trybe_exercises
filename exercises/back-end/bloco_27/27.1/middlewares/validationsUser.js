const { isValidFirstname, isValidLastname, isValidEmail, isStrongPassword } = require('express-validations');
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

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if(!isValidEmail(email)) {
    return res.status(UNAUTHORIZED).json({ 'message': 'Email is required'})
  }
  next();
}

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if(!isStrongPassword(password)) {
    return res.status(UNAUTHORIZED).json({ 'message': 'Strong password is required'})
  }
  next();
}


module.exports = {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePassword
};