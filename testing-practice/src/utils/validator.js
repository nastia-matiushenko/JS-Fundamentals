function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  if (!password || typeof password !== 'string') {
    return false;
  }
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
}

function validateAge(age) {
  const numAge = Number(age);
  return !isNaN(numAge) && numAge >= 0 && numAge <= 120;
}

function validateForm(formData) {
  const errors = {};
  
  if (!validateEmail(formData.email)) {
    errors.email = 'Invalid email format';
  }
  
  if (!validatePassword(formData.password)) {
    errors.password = 'Password must be at least 8 characters with uppercase and number';
  }
  
  if (!validateAge(formData.age)) {
    errors.age = 'Age must be a valid number between 0 and 120';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

module.exports = {
  validateEmail,
  validatePassword,
  validateAge,
  validateForm
};

