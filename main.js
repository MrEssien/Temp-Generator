//Create a variable for the button// 
const inputValue = document.getElementById("data");
const button = document.getElementById("btn")


function fahrenheitValue(){
 let fahrenheit = inputValue.value * (9/5) + 32;
 document.getElementById("output").textContent = fahrenheit + "°F";
};
button.addEventListener("click", fahrenheitValue);