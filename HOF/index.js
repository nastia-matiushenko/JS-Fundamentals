function applyOperation(arr, operation) {
	return arr.map(operation); 
}

function square(num) {
	return num * num;
}


const numbers = [1, 2, 3, 4];
const squaredNumbers = applyOperation(numbers, square);

console.log(squaredNumbers);
