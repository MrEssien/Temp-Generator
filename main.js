//Create a variable for the button// 
const inputvalue = document.getElementById("celsiusValue");
const button = document.getElementById("btn")



function fahrenheitValue(){
 let fahrenheit = inputvalue * (9/5) + 32;
 document.getElementById("output").innerHTML = fahrenheit + "°F";
}
button.addEventListener("click", fahrenheitValue);