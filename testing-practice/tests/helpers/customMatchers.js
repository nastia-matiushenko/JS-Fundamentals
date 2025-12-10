
expect.extend({
  toBeValidEmail(received) {
    const pass = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(received);
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid email`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid email`,
        pass: false
      };
    }
  },
  
  toBeValidAge(received) {
    const numAge = Number(received);
    const pass = !isNaN(numAge) && numAge >= 0 && numAge <= 120;
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid age`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid age (0-120)`,
        pass: false
      };
    }
  },
  
  toBePositiveNumber(received) {
    const pass = typeof received === 'number' && received > 0;
    if (pass) {
      return {
        message: () => `expected ${received} not to be a positive number`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} to be a positive number`,
        pass: false
      };
    }
  },
  
  toBeValidCurrency(received) {
    const pass = typeof received === 'string' && /^\$[\d,]+\.\d{2}$/.test(received);
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid currency format`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid currency format (e.g., $1,234.56)`,
        pass: false
      };
    }
  }
});

