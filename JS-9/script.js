// --------------- 1
const $heads = $('h2.head');
$heads.addClass('green');

const $innerHeads = $('h2.head span.inner');
$innerHeads.addClass('size');

// --------------- 2
const a = $("a");
pattern = /https:\/\//;

if (pattern.test(a.attr('href'))) {
    a.attr('target', '_blank');
}

console.log(a.attr("target"));

// --------------- 3

const $divs = $("h3 + div");

$divs.each((index, element) => {
	if (index < 2) {
		$("h3").eq(index).before(element);
	}
});

// --------------- 4

const $checkboxes = $(":checkbox");

let counter = 0;
$checkboxes.click(function (event) {
	const checked = event.target.checked;
	if (counter >= 3 && checked) return false;

	if (checked) counter++;
	else counter--;
});
