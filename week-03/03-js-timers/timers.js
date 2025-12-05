//types of timers
//timeout --> after the time runs out, an action happens
//interval --> Similar to a timeout, but repeats!

//To decide what type of timer you need, consider if it repeats or doesn't

//timeout

//TODO: I want to log a message in the console after five seconds

// setTimeout(function () {
//   console.log("This message appeared after 5 seconds.");
// }, 5000);

//Interval
// setInterval(function () {
//   console.log("Don't forget to drink water!");
// }, 15000);

//TODO: I want to remind myself to pay my rent every 2 seconds for a total of 10 seconds

// const rentReminder = setInterval(function () {
//   console.log("Pay your rent already!");
// }, 2000);

// setTimeout(function () {
//   clearInterval(rentReminder);
// }, 15000);

//N.B Timers are async!
//N.B CTRL + C in the terminal stops the code execution!

//================Variable Declare================

const topContainer = document.getElementById("top-container");
const textSuccess = document.getElementById("text-success");
const flyAgaricImgCreate = document.createElement("img");
const clickSuccess = document.createElement("p");

//================Variable Declare================

//================Place Image Down================
setTimeout(function () {
  topContainer.appendChild(flyAgaricImgCreate);
  flyAgaricImgCreate.src = "./images/toadstool-7564167_640.jpg";
  flyAgaricImgCreate.id = "flyAgaricimg";
}, 4000);
//================Place Image Down================

//================Trigger Image===================
setTimeout(function () {
  const captureFlyAgaric = document.getElementById("flyagaricimg");
  captureFlyAgaric.addEventListener(
    "click",
    function () {
      console.log("I clicked the fly agaric!");
      textSuccess.appendChild(clickSuccess);
      clickSuccess.textContent = "Congratulations! It worked!";
    },
    4025
  );
});
