const billInput = document.querySelector('#bill-input')
const peopleInput = document.querySelector('.people-input')
const tipAmount = document.querySelector('.tipamount')
const totalAmount = document.querySelector('.totalamount');
const error = document.querySelector(".small")
const tips = document.querySelectorAll('.tips')
const custom = document.querySelector("#custom-tip")
let tipPerson = tipAmount.innerHTML;
let totalPerson = totalAmount.innerHTML;
let customBtn = custom.innerHTML;

tips.forEach((tip)=> {
  tip.addEventListener("click", (event) => {
    tips.forEach((tipsbtn) => {
      tipsbtn.classList.remove("active-tip")
    })
    event.target.classList.add("active-tip")
  })
})


function handleClick(value) {
  tipAmount.innerHTML = eval(((value/100) * billInput.value)/peopleInput.value).toFixed(2);
  totalAmount.innerHTML = eval((billInput.value/peopleInput.value) + (((value/100) * billInput.value)/peopleInput.value)).toFixed(2);
  if (peopleInput.value == "0") {
    error.classList.remove("error")
  }
}
function reset() {
  tipAmount.innerHTML = tipPerson;
  totalAmount.innerHTML = totalPerson;
  billInput.value = "";
  peopleInput.value = "";
  custom.value = customBtn;
  tips.forEach((tipsbtn) => {
  tipsbtn.classList.remove("active-tip");
  })
}