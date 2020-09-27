var numSquares = 9;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
if (this.textContent === "Easy") {
	numSquares = 3;
} else if (this.textContent === "Medium") {
	numSquares = 6;
} else {
	numSquares = 9;
}
		reset();
	});
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a color from array
	pickedColor = pickColor();
	//change color display
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change color of sqaures
	for (var i = 0; i < squares.length; i++) {
	if (colors[i]) {
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
		}
		
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add colors
	squares[i].style.background = colors[i];

	//add click listeners
	squares[i].addEventListener("click", function(){
    //grab the clicked color
    var clickedColor = this.style.background;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
    	messageDisplay.textContent = "You Are Correct!!";
    	resetButton.textContent = "Play Again??";
    	changeColors(clickedColor);
    	h1.style.background = clickedColor;
    } else {
    	this.style.background = "#232323";
    	messageDisplay.textContent = "Please Try Again";
    }
	});
}

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
	//add colors
	squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for (var i = 0; i < num; i++) {
	//get random color and push to arr
	arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick red
	var r = Math.floor(Math.random() * 256);
	//pick green
	var g = Math.floor(Math.random() * 256);
	//pick blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}