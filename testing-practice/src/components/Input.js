// Simple Input component for UI testing

class Input {
  constructor(type = 'text', value = '') {
    this.type = type;
    this.value = value;
    this.required = false;
    this.valid = true;
    this.errorMessage = '';
  }

  setValue(value) {
    this.value = value;
    this.validate();
  }

  getValue() {
    return this.value;
  }

  setRequired(required) {
    this.required = required;
    this.validate();
  }

  validate() {
    if (this.required && !this.value.trim()) {
      this.valid = false;
      this.errorMessage = 'This field is required';
      return false;
    }
    
    if (this.type === 'email' && this.value && !this.value.includes('@')) {
      this.valid = false;
      this.errorMessage = 'Invalid email format';
      return false;
    }
    
    this.valid = true;
    this.errorMessage = '';
    return true;
  }

  isValid() {
    return this.valid;
  }

  getErrorMessage() {
    return this.errorMessage;
  }
}

module.exports = Input;

