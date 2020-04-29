var h3 = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#body");
var randomize = document.querySelector("button");

function changeGradientColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}

function randomizeColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	changeGradientColor();
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

changeGradientColor();

color1.addEventListener("input", changeGradientColor);
color2.addEventListener("input", changeGradientColor);
randomize.addEventListener("click", randomizeColors);