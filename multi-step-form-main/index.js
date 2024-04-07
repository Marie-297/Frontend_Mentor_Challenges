const stepOne = document.querySelector(".step1");
const stepTwo = document.querySelector(".step2");
const stepThree = document.querySelector(".step3");
const stepFour = document.querySelector(".step4");
const stepFive = document.querySelector(".step5");
const one = document.querySelector(".num1");
const two = document.querySelector(".num2");
const three = document.querySelector(".num3");
const four = document.querySelector(".num4");
const fullName = document.querySelector("#name");
const email = document.querySelector("#Email1");
const number = document.querySelector("#phone");
const nameErr = document.querySelector(".name-error");
const mailErr = document.querySelector(".mail-error");
const numErr = document.querySelector(".number-error");
const swich = document.querySelector(".switchs");
let card1 = document.querySelector(".card1");
let card1A = document.querySelector(".card1A");
const arcadeOne = document.querySelector(".arcade1");
const arcadeTwo = document.querySelector(".arcade2");
const arcadeThree = document.querySelector(".arcade3");
const arcadeFour = document.querySelector(".arcade4");
const arcadeFive = document.querySelector(".arcade5");
const arcadeSix = document.querySelector(".arcade6");
const cards = document.querySelectorAll(".card2");
cardInp = document.querySelector(".card2 input");
const firstBtn = document.querySelector("#firstbtn");
const secondBtn = document.querySelector("#secondbtn");
const stageFourFirstBtn = document.querySelector("#stagefourfirstbtn");
const stageFourSecondBtn = document.querySelector("#stagefoursecondbtn");
const thirdStageCardMth = document.querySelector(".thirdstagecards");
const thirdStageCardYr = document.querySelector(".thirdstagecardsyear");

function stageOne() {
  two.classList.remove("active");
  three.classList.remove("active");
  four.classList.remove("active");
  one.classList.add("active");
  stepOne.classList.remove("hidden");
  stepTwo.classList.add("hidden");
  stepThree.classList.add("hidden");
  stepFour.classList.add("hidden");
  stepFive.classList.add("hidden");
}
one.addEventListener("click",stageOne)
function stageTwo() {
  one.classList.remove("active");
  three.classList.remove("active");
  four.classList.remove("active");
  two.classList.add("active");
  stepTwo.classList.remove("hidden");
  stepOne.classList.add("hidden");
  stepThree.classList.add("hidden");
  stepFour.classList.add("hidden");
  stepFive.classList.add("hidden");
}
two.addEventListener("click",stageTwo);
function stageThree() {
  two.classList.remove("active");
  one.classList.remove("active");
  four.classList.remove("active");
  three.classList.add("active");
  stepThree.classList.remove("hidden");
  stepTwo.classList.add("hidden");
  stepOne.classList.add("hidden");
  stepFour.classList.add("hidden");
  stepFive.classList.add("hidden");
  thirdStageCardMth.classList.remove("hidden");
  thirdStageCardYr.classList.add("hidden");
  stageFourFirstBtn.classList.remove("hidden");
  stageFourSecondBtn.classList.add("hidden");
}
function stageThreeYr() {
  two.classList.remove("active");
  one.classList.remove("active");
  four.classList.remove("active");
  three.classList.add("active");
  stepThree.classList.remove("hidden");
  stepTwo.classList.add("hidden");
  stepOne.classList.add("hidden");
  stepFour.classList.add("hidden");
  stepFive.classList.add("hidden");
  thirdStageCardMth.classList.add("hidden");
  thirdStageCardYr.classList.remove("hidden");
  stageFourFirstBtn.classList.add("hidden");
  stageFourSecondBtn.classList.remove("hidden");
}
three.addEventListener("click",stageThree);
function stageFour() {
  two.classList.remove("active");
  three.classList.remove("active");
  one.classList.remove("active");
  four.classList.add("active");
  stepFour.classList.remove("hidden");
  stepTwo.classList.add("hidden");
  stepThree.classList.add("hidden");
  stepOne.classList.add("hidden");
  stepFive.classList.add("hidden");
}
four.addEventListener("click",stageFour);

function stageFive() {
  stepOne.classList.add("hidden");
  two.classList.remove("active");
  three.classList.remove("active");
  one.classList.remove("active");
  four.classList.add("active");
  stepFour.classList.add("hidden");
  stepTwo.classList.add("hidden");
  stepThree.classList.add("hidden");
  stepFive.classList.remove("hidden");
}

function endFirstStep() {
  if (fullName.value == "") {
    nameErr.innerHTML = "This field is required";
    fullName.style.borderColor = "red"
  }
  if (email.value == "") {
    mailErr.innerHTML = "This field is required";
    email.style.borderColor = "red"
  }
  if (number.value == "") {
    numErr.innerHTML = "This field is required";
    number.style.borderColor = "red"
  }
  if (fullName.value != "" && number.value != "" && email.value != "") {
    stageTwo();
  }
}
function checkMe() {
  let mnth = document.querySelector(".mth");
  let yr = document.querySelector(".yr");
  let check = document.querySelector("#check");
  if (check.checked) {
    yr.style.color = "hsl(213, 96%, 18%)";
    mnth.style.color = "hsl(231, 11%, 63%)";
    card1A.classList.remove("hidden");
    firstBtn.classList.add("hidden");
    secondBtn.classList.remove("hidden");
    card1.classList.add("hidden");
  } else {
    yr.style.color = "hsl(231, 11%, 63%)";
    mnth.style.color = "hsl(213, 96%, 18%)";
    card1A.classList.add("hidden");
    card1.classList.remove("hidden");
    firstBtn.classList.remove("hidden");
    secondBtn.classList.add("hidden");
  }
}

function arcOne() {
  arcadeOne.classList.add("active");
  arcadeTwo.classList.remove("active");
  arcadeThree.classList.remove("active");
  arcadeFour.classList.remove("active");
  arcadeFive.classList.remove("active");
  arcadeSix.classList.remove("active");
}
function arcTwo() {
  arcadeTwo.classList.add("active");
  arcadeOne.classList.remove("active");
  arcadeThree.classList.remove("active");
  arcadeFour.classList.remove("active");
  arcadeFive.classList.remove("active");
  arcadeSix.classList.remove("active");
}
function arcThree() {
  arcadeThree.classList.add("active");
  arcadeTwo.classList.remove("active");
  arcadeOne.classList.remove("active");
  arcadeFour.classList.remove("active");
  arcadeFive.classList.remove("active");
  arcadeSix.classList.remove("active");
}
function arcFour() {
  arcadeFour.classList.add("active");
  arcadeFive.classList.remove("active");
  arcadeSix.classList.remove("active");
  arcadeOne.classList.remove("active");
  arcadeTwo.classList.remove("active");
  arcadeThree.classList.remove("active");
}
function arcFive() {
  arcadeFive.classList.add("active");
  arcadeFour.classList.remove("active");
  arcadeSix.classList.remove("active");
  arcadeOne.classList.remove("active");
  arcadeTwo.classList.remove("active");
  arcadeThree.classList.remove("active");
}
function arcSix() {
  arcadeSix.classList.add("active");
  arcadeFive.classList.remove("active");
  arcadeFour.classList.remove("active");
  arcadeOne.classList.remove("active");
  arcadeTwo.classList.remove("active");
  arcadeThree.classList.remove("active");
}
function change() {
  stageTwo();
  cards.forEach(card => {
    const checkbox = card.querySelector('input[type="checkbox"]');
    card.classList.remove("active");
    checkbox.checked = false;
  })
}

cards.forEach(card => {
  const checkbox = card.querySelector('input[type="checkbox"]');
  card.addEventListener("click", (e) => {
    checkbox.checked = !checkbox.checked;
    card.classList.toggle("active", checkbox.checked);
  });
})
arcadeOne.addEventListener("click", arcOne);
arcadeTwo.addEventListener("click", arcTwo);
arcadeThree.addEventListener("click", arcThree);
arcadeFour.addEventListener("click", arcFour);
arcadeFive.addEventListener("click", arcFive);
arcadeSix.addEventListener("click", arcSix);

function updateSummary() {
  const selectedPlan = document.querySelector(".active .select-plan").textContent;
  const planPrice = parseFloat(document.querySelector(".active .small").textContent.replace(/\$/g, '').replace('/mo', '').trim());
  let totAmt = planPrice;

  const addons = document.querySelectorAll(".card2 input[type='checkbox']:checked");
  let addonsSummary = "";
  addons.forEach(addon => {
    const addonName = addon.parentNode.querySelector("h4").textContent;
    const addonPrice = parseFloat(addon.parentNode.parentNode.querySelector(".price").textContent.replace(/\$/g, '').replace('/mo', '').trim());
    totAmt += addonPrice;
    addonsSummary += `<div class="addons-select">
                        <p class="addons-name">${addonName}</p>
                        <p class="addons-price">+$${addonPrice}/mo</p>
                      </div>`;
  });
  const summaryContainer = document.querySelector(".summary-check");
  summaryContainer.innerHTML = `
    <div class="selected">
      <div class="arcade">
        <div>
        <p class="arcade-select">${selectedPlan}(Monthly)</p>
        <button type="button" class="linkbtn" onclick="change();">Change</button>
        </div>
        <p class="arcade-price">${planPrice}/mo</p>
      </div>
      <hr>
      <div class="addons">
        ${addonsSummary}
      </div>
    </div>
    <div class="total">
        <p class="tot">Total (per month)</p>
        <p class="tot-amt">+$${totAmt}/mo</p>
      </div>`
}
function updateSummaryYr() {
  const selectedPlan = document.querySelector(".active .select-plan").textContent;
  const planPrice = parseFloat(document.querySelector(".active .small").textContent.replace(/\$/g, '').replace('/yr', '').trim());
  let totAmt = planPrice;

  const addons = document.querySelectorAll(".card2 input[type='checkbox']:checked");
  let addonsSummary = "";
  addons.forEach(addon => {
    const addonName = addon.parentNode.querySelector("h4").textContent;
    const addonPrice = parseFloat(addon.parentNode.parentNode.querySelector(".price").textContent.replace(/\$/g, '').replace('/yr', '').trim());
    totAmt += addonPrice;
    addonsSummary += `<div class="addons-select">
                        <p class="addons-name">${addonName}</p>
                        <p class="addons-price">+$${addonPrice}/yr</p>
                      </div>`;
  });
  const summaryContainer = document.querySelector(".summary-check");
  summaryContainer.innerHTML = `
    <div class="selected">
      <div class="arcade">
      <div>
      <p class="arcade-select">${selectedPlan}(Yearly)</p>
      <button type="button" class="linkbtn" onclick="change();">Change</button>
      </div>
        <p class="arcade-price">${planPrice}/yr</p>
      </div>
      <hr>
      <div class="addons">
        ${addonsSummary}
      </div>
    </div>
    <div class="total">
        <p class="tot">Total (per year)</p>
        <p class="tot-amt">+$${totAmt}/yr</p>
      </div>`
}

function stageFourUpdate() {
  stageFour();
  updateSummary();
}
function stageFourUpdateYr() {
  stageFour();
  updateSummaryYr();
}

