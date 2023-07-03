// ---------------------- 1
class Circle {
	constructor(x, y, R) {
		this.x = x;
		this.y = y;
		this.R = R;
	}

	get lengthFormula() {
		return 2 * Math.PI * this.R;
	}

	static length(R) {
		return 2 * Math.PI * R;
	}

	get copyCircle() {
		return { ...this };
	}

	static getNewCircle(x, y, R) {
		return new Circle(x, y, R);
	}

	isItInCircle(x, y) {
		const distance = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
		return distance <= this.R;
	}
}

const circle = new Circle(0, 0, 4);
console.log(Circle.length(1));
console.log(circle.isItInCircle(0, 0));
console.log(circle.isItInCircle(5, 5));
console.log(circle.isItInCircle(2, 3));

// ---------------------- 2
function propsCount(currentObject) {
	return Object.values(currentObject).length;
}

let mentor = {
	course: "JS fundamental",
	duration: 3,
	direction: "web-development",
};
console.log(propsCount(mentor));

// ---------------------- 3
class Person {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
}

class Student extends Person {
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
	}

	showFullName(midleName) {
		return `${this.surname} ${this.name} ${midleName}`;
	}

	showCourse() {
		return 2023 - this.year;
	}
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());

// ---------------------- 4

class Marker {
	constructor(color, inkAmount = 100) {
		this.color = color;
		this.inkAmount = inkAmount;
	}

	print(line) {
		try {
			if (this.inkAmount <= 0) throw new Error("The marker is out of ink!");

			const lettersForPrint = Math.min(line.length, this.inkAmount);
			const printedLine = line.substring(0, lettersForPrint);
			console.log(`%c${printedLine}`, `color: ${this.color}`);

			this.inkAmount -= lettersForPrint;
			console.log(`Ink left: ${this.inkAmount}%`);
		} catch (ex) {
			alert(ex.message);
		}
	}
}

class refillMarker extends Marker {
	constructor(color, inkAmount) {
		super(color, inkAmount);
	}

	fillMarker() {
		this.inkAmount = 100;
		console.log(`Refilled Ink: ${this.inkAmount}%`);
	}
}

const marker = new Marker("red");
marker.print("Lorem ipsum dolor sit amet, consectetuer adipiscing elit.");

const refill = new refillMarker("green");
refill.print(
	"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
);
refill.fillMarker();
refill.print("Lorem");

// ---------------------- 5

class Worker {
	constructor(fullName, dayRate, workingDays) {
		this.fullName = fullName;
		this.dayRate = dayRate;
		this.workingDays = workingDays;
	}

	showSalary() {
		return this.dayRate * this.workingDays;
	}

	#experience = 1.2;

	showSalaryWithExperience() {
		return this.dayRate * this.workingDays * this.#experience;
	}

	get showExp() {
		return `${this.#experience}`;
	}

	set setExp(newExperience) {
		this.#experience = newExperience;
	}
}

function showSortedSalaries(workers) {
	const sortedWorkers = workers.sort(
		(a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience()
	);

	console.log("Sorted salary: ");
	sortedWorkers.forEach((worker) => {
		const { fullName } = worker;
		const workerSalary = worker.showSalaryWithExperience();

		console.log(`${fullName}: ${workerSalary}`);
	});
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.fullName + " salary: " + worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(
	worker1.fullName + " salary: " + worker1.showSalaryWithExperience()
);
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(
	worker1.fullName + " salary: " + worker1.showSalaryWithExperience()
);

console.log("\n");

let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.fullName + " salary: " + worker2.showSalary());
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
console.log(
	worker1.fullName + " salary: " + worker2.showSalaryWithExperience()
);
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(
	worker1.fullName + " salary: " + worker2.showSalaryWithExperience()
);

console.log("\n");

let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.fullName + " salary: " + worker3.showSalary());
console.log("New experience: " + worker3.showExp);
console.log(
	worker1.fullName + " salary: " + worker3.showSalaryWithExperience()
);
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(
	worker1.fullName + " salary: " + worker3.showSalaryWithExperience()
);
console.log("\n");

showSortedSalaries([worker1, worker2, worker3]);