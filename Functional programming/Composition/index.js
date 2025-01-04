const compose = (a, b) => (x) => a(b(x));

const double = (x) => x * 2;
const square = (x) => x * x;

const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3));
