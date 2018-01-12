var numsquares = 6;
var colors = generateRandomColors(numsquares);

var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var pickedcolor = pickcolor();
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");
colordisplay.textContent = pickedcolor;

for(var i=0; i<modeBtn.length; i++){
	modeBtn[i].addEventListener("click", function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Hard" ? numsquares = 6: numsquares =3;
		// if(this.textContent === "hard"){
		// 	numsquares = 6;
		// }else{
		// 	numsquares = 3;
		// }
		reset();
	});
}



function reset(){
	colors = generateRandomColors(numsquares);
	pickedcolor = pickcolor();
	messagedisplay.textContent = "";
	colordisplay.textContent = pickedcolor;
	resetBtn.textContent = "New Color";
	for(var i =0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
}
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	var numsquares = 3;
// 	colors = generateRandomColors(numsquares);
// 	pickedcolor = pickcolor();
// 	colordisplay.textContent = pickedcolor;
// 	for(var i =0; i< squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
	
// }
// });

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numsquares = 6;
// 	colors = generateRandomColors(numsquares);
// 	pickedcolor = pickcolor();
// 	colordisplay.textContent = pickedcolor;
// 	for(var i =0; i< squares.length; i++){
// 	squares[i].style.backgroundColor = colors[i];
// 	squares[i].style.display = "block";
	
// }
// })






for(var i =0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){

	var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedcolor){
			messagedisplay.textContent = "Correct!";
			changecolor(pickedcolor);
			resetBtn.textContent = "Play again?";
			h1.style.backgroundColor = pickedcolor;
		}else{
			this.style.backgroundColor = "#232323";
			messagedisplay.textContent = "Try again";
		}
	});
}

resetBtn.addEventListener("click",function(){
	reset();
// 	colors = generateRandomColors(numsquares);
// 	pickedcolor = pickcolor();
// 	messagedisplay.textContent = "";
// 	colordisplay.textContent = pickedcolor;
// 	this.textContent = "New Color";
// 	for(var i =0; i< squares.length; i++){
// 	squares[i].style.backgroundColor = colors[i];
// }
// 	h1.style.backgroundColor = "steelblue";
})


function changecolor(color){
	for(var i =0; i<squares.length ; i++){
		squares[i].style.backgroundColor = color;
	}
};

function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function randomcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", " +b +")";
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomcolor())
	}
	return arr;
}