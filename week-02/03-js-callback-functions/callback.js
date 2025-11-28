//TASK: I want to say the user's name and greet the user in the console.
//Part 1: say user's name
//Part 2: Greet the user

// function sayUsername(username) {
//     console.log(`Your username is: ${username}`);

// }

// function greetUser(greeting) {
//     console.log(`${greeting}`);
// }

// function welcomeMessage(greetUserParam, sayUsernameParam, usernameParam, greetingParam) {
//     greetUserParam("Good afternoon!");
//     sayUsernameParam(" Arron");
// }

// welcomeMessage(greetUser, sayUsername, "Arron", "good afternoon");

//CALLBACK FUNCTION: A callback function is simply where a function is passed to another be invoked on another function.

const username = "Arron";
const greetMorning = "Good morning ";
const greetMidday = "Good day ";
const greetAfternoon = "Good afternoon ";
const greetEvening = "Good evening ";
const punctExcla = "!";
const punctQuestn = "?";

let currentWeather = "Sunny";
// let weatherSunny = false
// let weatherCloudy = false
// let weatherFog = false
// let weatherRain = false
// let weatherStorm = false

//const success = Math.random() <= 0.15;

if (Math.random >= 0.75) {
  currentWeather = "Storm";
} else if (Math.random >= 0.55) {
  currentWeather = "Rain";
} else if (Math.random >= 0.35) {
  currentWeather = "Cloudy";
} else if (Math.random >= 0.2) {
  currentWeather = "Slight Clouds";
} else {
  currentWeather = "Sunny";
}
//This block of code above was a small experiment that doesn't seem to work as intended. currentWeather always defaults to "Sunny"! :(

//========Function 1========
//func 1 partition A
function greetUser(greetMorning) {
  console.log(`${greetMorning}`);
}
//func 1 partition B

function welcomeMessage(greetUser, username, punctExcla) {
  if (username === "Arron") {
    console.log(
      `Hi ${username}${punctExcla} Just logged in? ${greetMorning}and welcome to your dashboard${punctExcla}`
    );
  } else {
    console.log(`You are not ${username}, adios${punctExcla}`);
  }
}

welcomeMessage(greetMorning, username, punctExcla);

function add(d, e) {
  return d + e;
}

function multiply(d, e) {
  return d * e;
}

function calculate(d, e, operatorCalc) {
  console.log(
    "Doing a calculation with two numbers. Params are set in another function:",
    d,
    e
  );
  console.log(
    "paramaters, (in this case, the numbers and operator) are selected just below in the code:"
  );

  return operatorCalc(d, e);
}

//Third param is what operator to select. The name of the function that 'DOES' the operation needs to be written
const resultAdd = calculate(16, 8, add);
console.log(resultAdd);

const resultMult = calculate(48, 64, multiply);
console.log(resultMult);

const finalResult = calculate(resultAdd, resultMult, multiply);
console.log(finalResult);

//==========================

// function notifyUser() {
//   console.log("notifyUser function was called!");
// }

// function myAwesomeFunction(onCompleteCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");
//   onCompleteCallback();
// }

// // myAwesomeFunction(function () {
// //   console.log("notifyUser function was called!");
// // });

// myAwesomeFunction(() => {
//   console.log("notifyUser function was called!");
// });

// function myAwesomeFunction(onSuccessCallback, onFailureCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete. I will notify the user");

//   // randomly choose if success is true or false
//   const success = Math.random() > 0.5;
//   if (success) {
//     onSuccessCallback({
//       message: "This is the message of success",
//     });
//   } else {
//     onFailureCallback();
//   }
// }

// function onAwesomeSuccess(data) {
//   console.log("It was successful: ", data.message);
// }

// function onAwesomeFailure() {
//   console.log("It failed :(");
// }

// myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);

//==========================
// Getting random weather with Math.random() ... can't figure that out yet!
console.log(currentWeather);

// console.log(weatherFog);

//==========================
