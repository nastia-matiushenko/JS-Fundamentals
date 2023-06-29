// // 1
// const arrForSum = [1, 2, 3, 4, 5, 6, 7];

// function sumSliceArray(arr, first, second) {
// 	if (isNaN(first) || isNaN(second))
// 		throw new Error("please enter ONLY numbers!");

// 	if (first >= arr.length || second >= arr.length)
// 		throw new Error("the entered number is too big!");

// 	let sum = arr[first] + arr[second];
// 	return sum;
// }

// function sumCheck() {
// 	try {
// 		const first = +prompt(`please enter a first number: `);
// 		if (first === 0) {
// 			return;
// 		}

// 		const second = +prompt(`please enter a second number: `);
// 		if (second === 0) {
// 			return;
// 		}

// 		const arraySum = sumSliceArray(arrForSum, first, second);

// 		console.log(arrForSum);
// 		console.log(`arr[${first}] + arr[${second}] = `, arraySum);
// 	} catch (ex) {
// 		alert(ex.message);
// 		sumCheck();
// 	}
// }

// sumCheck();

// // 2
// function conditionsCheck(userName, age, userStatus) {
// 	if (age < 18 || age > 70)
// 		throw new RangeError("The age is out of the acceptable range!");

// 	if (!userName || !age || !userStatus)
// 		throw new Error("The field is empty! Please enter your age.");

// 	if (
// 		userStatus !== "moderator" &&
// 		userStatus !== "admin" &&
// 		userStatus !== "user"
// 	)
// 		throw new EvalError("Unknown status.");

// 	if (isNaN(age)) throw new Error("Entered age is not a number.");
// }

// function checkAge() {
// 	try {
// 		const userName = prompt("What is your name?");

// 		const age = +prompt("What is your age?");

// 		const userStatus = prompt("What is your status? admin/moderator/user");

// 		const userCheck = conditionsCheck(userName, age, userStatus);

// 		alert(
// 			`Name: ${userName} \nAge: ${age} \nStatus: ${userStatus} \nAllowed to watch a movie!`,
// 			userCheck
// 		);
// 	} catch (ex) {
// 		alert(ex.message);
// 		checkAge();
// 	}
// }

// checkAge();

// // 3
// function calcRectangleArea(width, height) {
// 	if (isNaN(width)) throw new Error("Entered width is not a number");

// 	if (isNaN(height)) throw new Error("Entered height is not a number");

// 	const area = width * height;
// 	return area;
// }

// function askForArea() {
// 	try {
// 		const width = +prompt("Rectangle width?");

// 		const height = +prompt("Rectangle height?");

// 		const result = calcRectangleArea(width, height);

// 		alert(`Rectangle Area =  ${width} * ${height} = ${result}`, result);
// 	} catch (ex) {
// 		alert(ex.message);
// 		askForArea();
// 	}
// }
// askForArea();

// // 4
// class MonthException {
// 	constructor(message) {
// 		this.message = message;
// 		this.name = "MonthException";
// 	}
// }

// const months = [
// 	"January",
// 	"February",
// 	"March",
// 	"April",
// 	"May",
// 	"June",
// 	"July",
// 	"August",
// 	"September",
// 	"October",
// 	"November",
// 	"December",
// ];

// function monthCheck(monthNum) {
// 	if (monthNum > months.length)
// 		throw new MonthException("Incorrect month number!");
// }

// function showMonthName() {
// 	try {
// 		const monthNum = +prompt("Please enter a number of any month: ");

// 		monthCheck(monthNum);

// 		alert(months[monthNum - 1]);
// 	} catch (ex) {
// 		console.log(ex);
// 		alert(ex.message);
// 	}
// }
// showMonthName();

// 5
function showUser(id) {
	if (id < 0) throw new Error(`Error: ID must not be negative: ${id}`);

	return { id };
}

function showUsers(ids) {
	return ids
		.map((id) => {
			try {
				return showUser(id);
			} catch (error) {
				console.log(error.message);
			}
		})
		.filter((v) => v);
}

console.log(showUsers([7, -12, 44, 22]));
