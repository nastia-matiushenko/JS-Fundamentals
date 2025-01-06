// Bubbling Example
document.getElementById("button").addEventListener("click", () => {
	alert("Button clicked (bubbling)");
});

document.getElementById("child").addEventListener("click", () => {
	alert("Child div clicked (bubbling)");
});

document.getElementById("parent").addEventListener("click", () => {
	alert("Parent div clicked (bubbling)");
});

// Capturing Example
document.getElementById("parent").addEventListener(
	"click",
	() => {
		alert("Parent div clicked (capturing)");
	},
	true
);

document.getElementById("child").addEventListener(
	"click",
	() => {
		alert("Child div clicked (capturing)");
	},
	true
);

document.getElementById("button").addEventListener(
	"click",
	() => {
		alert("Button clicked (capturing)");
	},
	true
);

// Event Delegation Example
document.getElementById("parent").addEventListener("click", (event) => {
	if (event.target.id === "button") {
		alert("Button clicked (event delegation)");
	}
});
