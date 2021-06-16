var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button"); 

color1.onload=setGradient();
color2.onload=setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomBackground() {
	color1.value = generateRandomHexCode();
	color2.value = generateRandomHexCode();
	setGradient(); 
}

function generateRandomHexCode(){
	const digits = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
  
	let hexCode = "#" 
  
	while( hexCode.length < 7 ){
	  hexCode += digits[ Math.round( Math.random() * digits.length ) ]
	}
  
	return hexCode 
  }

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener('click', randomBackground);


