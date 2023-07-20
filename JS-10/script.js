// ---------------- 1

let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let {first: f, third: x, fifth = "Name №5"} = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"

// ---------------- 2

let data = {
	names: ["Sam", "Tom", "Ray", "Bob"],
	ages: [20, 24, 22, 26],
};

let {
	names: name1 = "Sam", name2 = "Tom", name3 = "Ray", name4 = "Bob",
	ages: age1 = 20, age2 = 24, age3 = 22, age4 = 26,
} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// ---------------- 3

function mul(...args) {
	return args
		.filter((val) => typeof val === "number")
		.reduce((acc, curr) => {
			acc === 0 ? curr : acc * curr;
		}, 0);
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// ---------------- 4

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

function mapBuilder(keysArray, valuesArrays) {
	let map = new Map();

	keys.forEach((key, index) => map.set(key, values[index]));

	return map;
}

let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"

// ---------------- 5

let arr = [];

for (let i = 0; i <= 2; i++) {
	arr[i] = function () {
		console.log(i);
	};
}

arr[0](); // 0
arr[arr.length - 1](); // 2
