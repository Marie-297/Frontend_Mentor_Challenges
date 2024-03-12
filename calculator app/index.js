const keypad = document.querySelectorAll(".keypad");
const keypadNum = document.querySelectorAll(".num");
const deleteBtn = document.querySelector(".del");
const resetBtn = document.querySelector(".resetkey");
const equalsBtn = document.querySelector(".equals");const screenOutput = document.querySelector("#view");
const themeOne = document.querySelector(".theme1");
const themeTwo = document.querySelector(".theme2");
const themeThree = document.querySelector(".theme3");
const bodyCon = document.querySelector(".body");





function select(value) {
  screenOutput.value = screenOutput.value + value;
}
function calc() {
  screenOutput.value = eval(screenOutput.value);
}
function del() {
  screenOutput.value = screenOutput.value.slice(0,-1);
}
function reset() {
  screenOutput.value = "";
}
function toggleTwo() {
  themeTwo.classList.remove("hide");
  themeOne.classList.add("hide");
  themeThree.classList.add("hide")
  bodyCon.classList.add("bodytwo");
  bodyCon.classList.remove("bodythree");

}
function toggleThree() {
  themeThree.classList.remove("hide");
  themeTwo.classList.add("hide");
  themeOne.classList.add("hide");
  bodyCon.classList.remove("bodytwo");
  bodyCon.classList.add("bodythree");
  
}
function toggleOne() {
  themeThree.classList.add("hide");
  themeTwo.classList.add("hide");
  themeOne.classList.remove("hide");
  bodyCon.classList.remove("bodythree");
  bodyCon.classList.remove("bodytwo");
}
