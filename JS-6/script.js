// -------------------- 1
document.addEventListener("DOMContentLoaded", function () {
	const myBtn = document.getElementById("button-open");
	const myModal = document.getElementById("example-modal");
	const closeBtn = document.getElementById("button-close");

	const list = document.getElementById("list");
	const firstElement = list.firstElementChild.innerHTML;
	const lastElement = list.lastElementChild.innerHTML;
	const secondElement = list.firstElementChild.nextElementSibling;
	const secondElementText = secondElement.innerHTML;
	const thirdElement = secondElement.nextElementSibling.innerHTML;
	const fourthElement = list.lastElementChild.previousElementSibling.innerHTML;

	const text = document.getElementById("text");

	myBtn.addEventListener("click", function () {
		myModal.classList.add("show");
		myModal.style.display = "block";
		document.body.classList.add("modal-open");

		text.innerHTML = `${firstElement}, ${lastElement}, ${secondElementText}, ${fourthElement}, ${thirdElement}`;
	});

	myModal.addEventListener("click", function (event) {
		if (
			event.target === myModal ||
			event.target.getAttribute("data-dismiss") === "modal" ||
			event.target === closeBtn
		) {
			myModal.classList.remove("show");
			myModal.style.display = "none";
			document.body.classList.remove("modal-open");
		}
	});
});

// -------------------- 2
const h1 = document.getElementsByTagName("h1")[0];
const div = document.getElementById("myDiv");
const list = document.getElementById("myList");
const wrapper = document.getElementById("wrapper");
const span = document.getElementsByTagName("span")[0];
const allListElements = document.querySelectorAll("ul#myList li");

const firstElement = div.firstElementChild;
const secondElement = firstElement.nextElementSibling;
const thirdElement = secondElement.nextElementSibling;
const fourthElement = thirdElement.nextElementSibling;

wrapper.style.fontFamily = "Times New Roman"

h1.style.backgroundColor = "#00FA9A";
h1.style.fontWeight = "bold";
h1.style.font = "#00FA9A";

firstElement.style.fontWeight = "bold";
secondElement.style.color = "red";
thirdElement.style.textDecoration = "underline";
fourthElement.style.fontStyle = "italic";

span.hidden = true;

function showArr(){
    let arr = [];
    for (let i = 0; i < allListElements.length; i++) {
        arr.push(allListElements[i].innerHTML);
    }
    return joinedArr = arr.join("");
}

list.innerHTML = showArr();

// -------------------- 3
const main = document.createElement("main");
const div = document.createElement("div");
const p = document.createElement("p");

main.classList.add("mainClass", "check", "item");
div.setAttribute("id", "myDiv");
p.innerText = "First paragraph";

document.body.appendChild(main);
main.appendChild(div);
div.appendChild(p);

// -------------------- 4

const btn = document.querySelector(".submit-button");
const inputs = document.querySelectorAll(".arr");
const outBlock = document.querySelector(".out");

btn.addEventListener("click", showSubmittedData);

function showSubmittedData() {
	try {
		let values = "";

		for (const input of inputs) {
			checkIsNotEmpty(input);

			values += input.value + "\n";
		}

		outBlock.innerText = values;
	} catch (ex) {
		alert(ex.message);
	}
}

function showSubmittedData() {
	let values = "";
	let invalidInputs = [];

	for (const input of inputs) {
		try {
			checkIsNotEmpty(input);

			values += input.value + "\n";
		} catch (ex) {
			invalidInputs.push(input.name);
		}
	}

	if (invalidInputs.length) {
		alert(`Empty inputs: ${invalidInputs.join(", ")}`);

		return;
	}

	outBlock.innerText = values;
}

function checkIsNotEmpty(input) {
	if (!input.value) throw new Error();
}

// -------------------- 5

const circleTags = document.querySelectorAll("div.circle");
const elementsDataAnim = document.querySelectorAll("[data-anim]");

for (const attribute of elementsDataAnim) {
	const attributeValue = attribute.getAttribute("data-anim");
	attribute.classList.add(attributeValue);
}

// -------------------- 6

const colorSpans = document.querySelectorAll("div.colors span[color]");
const materialSpans = document.querySelectorAll("div.material-types span.type");
const seasonSpans = document.querySelectorAll("div.seasons span.season");
const price = document.getElementById("outprice");

[...colorSpans, ...materialSpans, ...seasonSpans].forEach((span) => {
	span.addEventListener("click", () => {
		setActive(span);

		sumPrices();
	});
});

function setActive(span) {
	let spansToReset;

	if (span.classList.contains("color")) spansToReset = colorSpans;
	else if (span.classList.contains("type")) spansToReset = materialSpans;
	else spansToReset = seasonSpans;

	spansToReset.forEach((sp) => sp.classList.remove("active"));

	span.classList.add("active");
}

function sumPrices() {
	const color = Array.from(colorSpans).find((span) => {
		if (span.className.includes("active")) return span;
	});
	const material = Array.from(materialSpans).find((span) => {
		if (span.className.includes("active")) return span;
	});
	const season = Array.from(seasonSpans).find((span) => {
		if (span.className.includes("active")) return span;
	});

	const colorPrice = +color.getAttribute("data-price");
	const materialPrice = +material.getAttribute("data-price");
	const seasonsPrice = +season.getAttribute("data-price");

	const sum = colorPrice + materialPrice + seasonsPrice;

	price.innerHTML = sum;
}

sumPrices();
