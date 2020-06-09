const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  data.order = !isEmpty(data.order) ? data.order : '';

 
  if (Validator.isEmpty(data.order)) {
    errors.order = 'Order field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
