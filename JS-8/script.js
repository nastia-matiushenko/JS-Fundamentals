// ----------------- 1

function upperCase(string) {
	let pattern = /[A-Z]/;

	if (pattern.test(string))
		console.log("String does not start with uppercase character");
	else
        console.log("String starts with uppercase character");
}

upperCase("regexp");
upperCase("RegExp");

// ----------------- 2

function checkEmail(string) {
	let pattern = /\w+@\w+\.\w+/;
	console.log(pattern.test(string));
}

checkEmail("Qmail2@gmail.com");

// ----------------- 3

let text = "Java Script";

let replacedText = text.replace(/^Java Script$/, "Script. Java");

console.log(replacedText);

OR

let text = "Java Script";
let pattern = /(\w)+\s(\w+)/;

let replacedText = text.replace(pattern, "$2, $1");

console.log(replacedText);

// ----------------- 4

function validateCard(card) {
	let pattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/g;
    let result = pattern.test(card);

    console.log(result);
}

validateCard("9999-9999-9999-9999");

// ----------------- 5

function checkEmail(email) {
	let pattern = /^[\w]+([_-]?[\w]+)*@[\w.-]+\.[\w]{2,}$/g;
	if (email.match(pattern) !== null) {
		return "Email is correct!";
	}
	return "Email is not correct!";
}

console.log(checkEmail("my_mail@gmail.com"));
console.log(checkEmail("#my_mail@gmail.com"));
console.log(checkEmail("my_ma--il@gmail.com"));

// ----------------- 6 

function checkLogin(login) {
    const pattern = /^[\w]+[\d\w.]{2,10}$/;
    const numberPattern = /\d+(\.\d+)?/g;

    if(!login.match(pattern)) {
        return false;
    }

    const numbers = login.match(numberPattern);
    
    return numbers !== null ? numbers : [];
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));

