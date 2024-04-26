let daysToLaunch = document.querySelector("#days");
let hoursToLaunch = document.querySelector("#hours");
let secondsToLaunch = document.querySelector("#seconds");
let minutesToLaunch = document.querySelector("#minutes");
let seconds = document.querySelector(".secondsinnerbox");

function countdown() {
  // Get the current date
  let date = new Date();

  // Add 10 days to the current date
  let launch = new Date("July 05, 2024 00:00:00").getTime();

  //get the current date
  const currentDate = new Date().getTime();
 
  // get the difference between the current date and the launch date
  let difference = (launch - currentDate);
  
  //calculate the days,hours,minutes,seconds from the difference
  let daysLeft = Math.floor(difference/(1000*60*60*24));

   // Calculate the remaining milliseconds after removing the days
  let remainingDifference = difference%(1000*60*60*24);
  let hoursLeft = Math.floor(remainingDifference/(1000*60*60));
  remainingDifference = remainingDifference%(1000*60*60);
  let minutesLeft = Math.floor(remainingDifference/(1000*60));
  remainingDifference = remainingDifference%(1000*60);
  let secondsLeft = Math.floor(remainingDifference/1000);
  

  //formatting the days, hours, minutes and seconds to add 0 when less than 10
  hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  daysLeft = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  
  //display the days, hours, minutes and seconds on the page
  daysToLaunch.innerHTML = daysLeft;
  hoursToLaunch.innerHTML = hoursLeft;
  minutesToLaunch.innerHTML = minutesLeft;
  secondsToLaunch.innerHTML = secondsLeft;
}

//Run the function
countdown();

//Run the function every 1 second
setInterval(countdown, 1000);