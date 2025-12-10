// Calculator utility functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function calculate(operation, a, b) {
  const operations = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  };
  
  if (!operations[operation]) {
    throw new Error(`Unknown operation: ${operation}`);
  }
  
  return operations[operation](a, b);
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate
};

