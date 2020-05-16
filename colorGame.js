var numSquares=6;
var colors = [];
var pickedColor;
var displayColor = document.getElementById('displaycolor')
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var resetbutton = document.querySelector("#resetbutton");
var h1 = document.querySelector("h1");
var modeButton = document.querySelectorAll(".mode");
init();
function init(){
	//mode buttons
	for(var i=0; i<modeButton.length;i++){
		modeButton[i].addEventListener("click",function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numSquares=3;
			}
			else{
				numSquares=6;
			}
			reset();
		});
	}
	//colors loop
	for(var i=0;i< squares.length ;i++){
		// squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!";
			changeColor(clickedColor);
			h1.style.backgroundColor=clickedColor;
			resetbutton.textContent = "Play Again!"
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
		reset();
}

}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	//put message
	displayColor.textContent = pickedColor;
	//change the squares
	messageDisplay.textContent = "";
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		}
		else{
 		squares[i].style.display = "none";	
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetbutton.textContent = "New Colors";
}

resetbutton.addEventListener("click",function(){
	reset();
});

function changeColor(color){
	for(var i=0 ;i< squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}
