// 2
alert("Matiushenko");

// 3
let a = "monkey";
let b = "dog";
alert(`set variables: ${a} and ${b}`);

b = a;
alert(`updated variables (b = a): ${a} and ${b}`);

// 4
const dataTypes = {
	string: "lobster",
	number: 1,
	boolean: true,
	undefined: undefined,
	null: null,
};

// 5
const isAdult = confirm("Are you age 18 or over?");
console.log(isAdult);

// 6
let myName = "Anastasiia";
let mySurname = "Matiushenko";
let studyGroup = "JS-Fundamentals-June";
let birthDate = 2000;
let isMarried = false;
let emptyObject = null;
let undefinedValue = undefined;

console.log(`Birth Date: ${birthDate}, type: ${typeof birthDate}`);
console.log(`Married: ${isMarried}, type: ${typeof isMarried}`);
console.log(`Name: ${myName}, type: ${typeof myName}`);
console.log(`Study Group: ${studyGroup}, type: ${typeof studyGroup}`);
console.log(`Empty Object: ${emptyObject}, type: ${typeof emptyObject}`);
console.log(
	`Undefined Value: ${undefinedValue}, type: ${typeof undefinedValue}`
);

// 7
let login = prompt("Your login:");
let email = prompt("Your email: ___@gmail.com");
let password = prompt("Your password:");

alert(
	`Dear ${login}, your email is ${email}@gmail.com, your password is ${password}`
);

// 8
let minute = 60;
let hour = 60 * minute;
let day = hour * 24;
let month = day * 12;

alert(`${hour}s in an hour, ${day}s in a day, ${month}s in a month `);
