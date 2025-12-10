const { add, divide, calculate } = require('../../src/utils/calculator');

describe('Calculator - Basic Operations', () => {
  let testData;
  
  beforeEach(() => {
    testData = { a: 10, b: 5 };
  });
  
  afterEach(() => {
    testData = null;
  });

  describe('add function', () => {
    test('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(testData.a, testData.b)).toBe(15);
    });
  });

  describe('divide function', () => {
    test('should divide two numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('calculate function', () => {
    test('should perform add operation', () => {
      expect(calculate('add', 5, 3)).toBe(8);
    });

    test('should throw error for unknown operation', () => {
      expect(() => calculate('unknown', 5, 3)).toThrow('Unknown operation: unknown');
    });
  });
});

describe('Calculator - Edge Cases', () => {
  test('should handle decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

