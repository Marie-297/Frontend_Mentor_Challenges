const mainBody = document.querySelector(".main-body");
const secondBody = document.querySelector(".main-body2");
const submitButton = document.querySelector(".submit-btn");
const rates = document.querySelectorAll(".num-btn");
const ratingSpan = document.querySelector(".numselect");

submitButton.addEventListener('click', () => {
  secondBody.classList.remove("hidden")
  mainBody.classList.add("hidden")
})

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    //console.log(rate.innerHTML);
    ratingSpan.innerHTML = rate.innerHTML
  })
});

