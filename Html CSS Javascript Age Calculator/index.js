//INPUTS
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const requiredError = document.querySelector(".dayerror");
const requiredMonthError = document.querySelector(".montherror");
const requiredYearError = document.querySelector(".yearerror");
const validYear = document.querySelector(".validyr");
const validMonth = document.querySelector(".validmon");
const validDay = document.querySelector(".validday");
const labelDay = document.querySelector(".labelday");
const labelYear = document.querySelector(".labelyear");
const labelMonth = document.querySelector(".labelmonth");



const button = document.querySelector(".btn")

//OUTPUTS
const dayOutput = document.querySelector(".days");
const monthOutput = document.querySelector(".months");
const yearOutput = document.querySelector(".years");

const todayDate = new Date();
let todayDay = todayDate.getDate();
let todayMonth = todayDate.getMonth()+1;
let todayYear = todayDate.getFullYear();

const numberOfMonths = [31,28,31,30,31,30,31,31,30,31,30,31]


function calculateAge() {
  let d = todayDay - dayInput.value;
  let m = todayMonth - monthInput.value;
  let y = todayYear - yearInput.value
  console.log(m);
  if (d < 0) {
    m = m - 1;
    d = d + numberOfMonths[Number(monthInput.value) - 1];
  }
  if (m < 0) {
    y = y - 1;
    m = m + 12;
  }
  dayOutput.textContent = d;
  monthOutput.textContent = m;
  yearOutput.textContent = y;

  validateInput();
  
}

function validateInput() {
  if (dayInput.value == "") {
    dayInput.classList.add("input-error");
    requiredError.classList.remove("hidden");
    labelDay.classList.add("labelerror")
  } 
  if (dayInput.value > numberOfMonths[(monthInput.value - 1)] || dayInput.value > 31) {
    validDay.classList.remove("hidden");
    dayInput.classList.add("input-error");
    labelDay.classList.add("labelerror")
  }
  if (monthInput.value == "") {
    monthInput.classList.add("input-error");
    requiredMonthError.classList.remove("hidden");
    labelMonth.classList.add("labelerror")
  }
  if (monthInput.value > 12) {
    validMonth.classList.remove("hidden");
    monthInput.classList.add("input-error");
    labelMonth.classList.add("labelerror")
  }
  // } else {
  //   validMonth.classList.add("hidden");
  //   monthInput.classList.remove("input-error");
  //   labelMonth.classList.remove("labelerror");
  // }
  if (yearInput.value == "") {
    yearInput.classList.add("input-error");
    requiredYearError.classList.remove("hidden");
    labelYear.classList.add("labelerror")
  } 
  if (validateInput = true) {
    defaultValues();
  }
} 

function defaultValues() {
  dayOutput.textContent = "--"
  monthOutput.textContent = "--"
  yearOutput.textContent = "--"
}