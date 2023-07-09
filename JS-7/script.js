// // -------------------- 1

let newWindow = window.open(
	" ",
	"newWindow",
	"width=300,height=300,left=500,right=500"
);

newWindow.document.write("hello you!");

const resizeWindow = () => {
	newWindow.resizeTo(500, 500);
};

setTimeout(resizeWindow, 2000);

const moveWindow = () => {
	newWindow.moveTo(200, 200);
};

setTimeout(moveWindow, 4000);

const closeWindow = () => {
	newWindow.close();
};

setTimeout(closeWindow, 6000);

// // -------------------- 2

const p = document.querySelector("#text");
const button = document.querySelector(".change-style");

button.onclick = changeCSS;

function changeCSS() {
	p.style.color = "orange";
	p.style.fontSize = "20px";
	p.style.fontFamily = "Comic Sans MS";
}

// // -------------------- 3

const blue = document.querySelector(".blue");
const pink = document.querySelector(".pink");
const brown = document.querySelector(".brown");
const yellow = document.querySelector(".yellow");

const buttonsSet = document.querySelector(".buttons-set");

blue.onclick = () => {
	buttonsSet.style.backgroundColor = "blue";
};

pink.addEventListener("click", doubleClickAction);

let counClick = 0;

function doubleClickAction() {
	counClick++;

	if (counClick === 2) {
		buttonsSet.style.backgroundColor = "pink";
		counClick = 0;
	}
}

brown.onmousedown = () => {
	buttonsSet.style.backgroundColor = "brown";
};

brown.onmouseup = () => {
	buttonsSet.style.backgroundColor = "white";
};

yellow.onmouseover = () => {
	buttonsSet.style.backgroundColor = "yellow";
};

yellow.onmouseleave = () => {
	buttonsSet.style.backgroundColor = "white";
};

// // -------------------- 4

const options = document.querySelectorAll(".form-select option[value]");
const selectForm = document.querySelector(".form-select");
const deleteButton = document.querySelector(".choose-and-delete");

deleteButton.addEventListener("click", deleteElement);

function deleteElement() {
	const value = selectForm.value;

	const option = Array.from(options).find((element) => element.value === value);
	option.remove();
}

// // -------------------- 5

const liveButton = document.querySelector(".live-button");
const liveContainer = document.querySelector(".live-container");

liveButton.onclick = () => {
	const div = document.createElement("div");
	div.innerHTML = "I wass pressed!";
	div.classList.add("m-2");

	liveContainer.appendChild(div);
};

liveButton.onmouseover = () => {
	const div = document.createElement("div");
	div.innerHTML = "Mouse is on me!";
	div.classList.add("m-2");

	liveContainer.appendChild(div);
};

liveButton.onmouseout = () => {
	const div = document.createElement("div");
	div.innerHTML = "Mouse is not on me!";
	div.classList.add("m-2");

	liveContainer.appendChild(div);
};

// // -------------------- 6

let liveResize = document.querySelector(".live-resize");

document.body.onresize = () => {
	let width = window.outerWidth;
	let height = window.outerHeight;

	liveResize.innerHTML = `Width: ${width}, Height: ${height}`;
}

// -------------------- 7

const options = document.querySelectorAll("#country option[value]");
const countrySelector = document.querySelector("#country");
const citiesSelector = document.querySelector("#cities");
const text = document.querySelector(".text");

countrySelector.addEventListener("change", (e) => {
	const selectedCountryValue = e.target.value;

	const gerCities = ["Berlin", "Hamburg", "Kassel", "Dortmund"];
	const usaCities = ["New York", "Los Angeles", "Boston", "California"];
	const ukrCities = ["Kyiv", "Dnipro", "Kharkiv", "Lviv"];

	function addCities(cities) {
		citiesSelector.innerHTML = "";

		cities.forEach((element) => {
			const option = document.createElement("option");
			option.innerHTML = element;
			citiesSelector.appendChild(option);
		});
	}

	if (selectedCountryValue === "ger") {
		addCities(gerCities);
	}

	if (selectedCountryValue === "usa") {
		addCities(usaCities);
	}

	if (selectedCountryValue === "ukr") {
		addCities(ukrCities);
	}
});

citiesSelector.addEventListener("change", (e) => {
	const selectedCityValue = e.target.value;

	showCountry(selectedCityValue);
});

function showCountry(selectedCityValue) {
	const countryText = countrySelector.selectedOptions[0].text;
	const cityText = selectedCityValue;

	text.innerHTML = countryText + ", " + cityText;
}
