const cardNumberOutput = document.querySelector(".card-number");
const cardNameOutput = document.querySelector(".card-name");
const cardExpiryOutputMM = document.querySelector(".expiry-date-mm");
const cardExpiryOutputYY = document.querySelector(".expiry-date-yy");
const cardExpiryInputYY = document.querySelector(".inputyy");
const cardExpiryInputMM = document.querySelector(".inputmm");
const cvcOutput = document.querySelector(".cvc-output");
const cvcInput = document.querySelector("#cvc");
const cardNameInput = document.querySelector("#cardinputname");
const cardNumberInput = document.querySelector("#cardnum");
const submitBtn = document.querySelector(".btnsubmit");
const thankYou = document.querySelector(".thank-you");
const cardNumError = document.querySelector(".formaterror");
const rightSect = document.querySelector(".right-section");
const nameError = document.querySelector(".nameerror");
const numberError = document.querySelector(".numerror");
const dateError = document.querySelector(".dateerror");
const cvcError = document.querySelector(".cvcerror");
const completed = document.querySelector(".right-section")
const thanks = document.querySelector(".thank-you")

function nameInput() {
  cardNameOutput.innerText = cardNameInput.value;
  if (cardNameInput.value == "") {
    cardNameOutput.innerText = cardNameInput.placeholder
  }
}
function numInput() {
  if (cardNumberInput.value === "") {
    cardNumberOutput.innerText = cardNumberInput.placeholder;
  } else {
  cardNumberOutput.innerText = cardNumberInput.value;
  cardNumberInput.value = cardNumberInput.value.match(/\d{1,4}/g).join(' ');
  }
}
function inputMM() {
  cardExpiryOutputMM.innerText = cardExpiryInputMM.value;
  if (cardExpiryInputMM.value == '') {
    cardExpiryOutputMM.innerText = "00";
  }
}
function inputYY() {
  cardExpiryOutputYY.innerText = cardExpiryInputYY.value;
  if (cardExpiryInputYY.value == '') {
    cardExpiryOutputYY.innerText = "00";
  }
}
function inputCVC() {
  cvcOutput.innerText = cvcInput.value;
  if (cvcInput.value == '') {
    cvcOutput.innerText = "000";
  }
}
cardNameInput.addEventListener("keyup", nameInput());
cardNumberInput.addEventListener("keyup", numInput());


function submitButton() {
  if (!cardNameInput.value) {
    cardNameInput.classList.add("error");
    nameError.innerText = "can't be blank"
  } else {
    cardNameInput.classList.remove("error");
    nameError.innerText = "";
  }
  if (cardNumberInput.value === "") {
    cardNumberInput.classList.add("error");
    numberError.innerText = "can't be blank"
  } else {
    cardNumberInput.classList.remove("error");
    numberError.innerText = "";
  }
  if (cardExpiryInputMM.value === "") {
    cardExpiryInputMM.classList.add("error");
    dateError.innerText = "can't be blank"
  } else {
    cardExpiryInputMM.classList.remove("error");
    dateError.innerText = "";
  }
  if (cardExpiryInputYY.value === "") {
    cardExpiryInputYY.classList.add("error");
    dateError.innerText = "can't be blank"
  } else {
    cardExpiryInputYY.classList.remove("error");
    dateError.innerText = "";
  }
  if (cvcInput.value === "") {
    cvcInput.classList.add("error");
    cvcError.innerText = "can't be blank"
  } else {
    cvcInput.classList.remove("error");
    cvcError.innerText = "";
  }
  if (cardNameInput.value&&cardNumberInput.value&&cardExpiryInputMM.value&&cardExpiryInputYY.value&&cvcInput.value) {
    completed.classList.add("hidden");
    thanks.classList.remove("hidden");
  }
}

function continueBtn() {
  completed.classList.remove("hidden");
  thanks.classList.add("hidden");
  cardNameInput.value = "";
  cardNameOutput.innerText = "Jane AppleSeed";
  cardNumberInput.value = "";
  cardNumberOutput.innerText = "0000 0000 0000 0000";
  cvcInput.value = "";
  cvcOutput.innerText = "000";
  cardExpiryInputMM.value = "";
  cardExpiryOutputMM.innerText = "00";
  cardExpiryInputYY.value = "";
  cardExpiryOutputYY.innerText = "00";
}
