// --------------------- 1

function getPromise(message, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(message);
		}, delay);
	});
}

getPromise("test promise", 2000).then(function (data) {
	console.log(data);
});

// --------------------- 2

function calcArrProduct(arr) {
	return new Promise((resolve, reject) => {
		let mult = 1;
		arr.forEach((element) => {
			if (isNaN(element)) resolve("Error! Incorrect array!");
			else mult *= element;
		});
		resolve(mult);
	});
}

calcArrProduct([3, 4, 5]).then((result) => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then((result) => console.log(result));
// "Error! Incorrect array!"

// --------------------- 3

new Promise(function (resolve, reject) {
	let number = +prompt("Please enter a number");

	if (isNaN(number)) reject(new Error("Entered not a number"));
	else resolve(number);
})
	.catch(function (error) {
		const repeatRequest = () => {
			return new Promise(function (resolve, reject) {
				let number = +prompt("Please enter a number this time");

				if (isNaN(number)) {
					repeatRequest();
				} else {
					console.log("number:", number);
				}
			});
		};
		return repeatRequest();
	})
	.then(function (number) {
		console.log("number:", number);
	})
	.catch((err) => log(err));
