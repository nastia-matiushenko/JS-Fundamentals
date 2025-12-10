const { formatCurrency, capitalizeWords } = require('../../src/utils/formatter');
require('../helpers/customMatchers');

describe('Formatter', () => {
  describe('formatCurrency function', () => {
    test('should format USD currency correctly', () => {
      const result = formatCurrency(1234.56);
      expect(result).toBeValidCurrency();
      expect(result).toContain('$');
    });
  });

  describe('capitalizeWords function', () => {
    test('should capitalize first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
    });
  });
});

