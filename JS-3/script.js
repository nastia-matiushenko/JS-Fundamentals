// 1

function createArray(start, end) {
	let newArr = [];

	for (let i = 0; i < end - 1; i++) newArr.push(start++);
	return newArr;
}

let arr = createArray(2, 9);
console.log(arr);

// 2
let arr = [];
function showInteger(a, b) {
	for (let i = 0; i < b; i++) {
		arr.push(a++);
	}

	let result = arr.map((element) => {
		return new Array(element).fill(element);
	});
	return result.flat();
}

let integers = showInteger(1, 7);
console.log(integers);

// 3
let numbers = [];
function randArray(k) {
	for (let i = 1; i <= k; i++) {
		let randomNumbers = Math.floor(Math.random() * 500);
		numbers.push(randomNumbers);
	}
	return numbers;
}
console.log(randArray(5));

// 4
const arr = [5, 3, 4, 5, 6, 7, 3];

function compact(array) {

	let newArray = array.filter((element, index) => {
		return array.indexOf(element) === index;
	});
	return newArray;
}

const arr2 = compact(arr);
console.log(arr2);

// 5
let data = [
	5,
	"Limit",
	12,
	"a",
	"3",
	99,
	2,
	[2, 4, 3, "33", "a", "text"],
	"strong",
	"broun",
];

function funcName(arr) {
	let newArr = data.flat();
	console.log(newArr);

	let numbersArr = [];
	let stringsArr = [];

	for (element of newArr) {
		if (typeof element === "number") {
			numbersArr.push(element);
		} else {
			stringsArr.push(element);
		}
	}
	let combinedArr = new Array(numbersArr, stringsArr);
	return combinedArr;
}
let arrNew = funcName(data);
console.log(arrNew);

// 6
function calc(a, b, op) {

	return op === 1 ? a - b
			: op === 2 ? a * b
			: op === 3 ? a / b
			: a + b ;
}

console.log(calc(10, 3, 1));

// 7
function findUnique(arr) {
	let filteredArr = arr.filter((element, index) => {
		return arr.indexOf(element) === index;
	});
	return arr.length !== filteredArr.length ? false : true;
}

console.log(findUnique([1, 2, 3, 5, 3])); // false
console.log(findUnique([1, 2, 3, 5, 11])); // true
