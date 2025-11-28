//An example of a function!

//I eventually didn't get to use these variables declared at the top!
//========Variable Declaration ==================
//
// const buttonTrigger = document.querySelector("#button-trigger");
// const buttonTriggerClick = document.createElement("h1");
//===============================================

//========GLOBAL SCOPE function: ================

const myLocation = "Surrey";
const myName = "Arron";

function myWelcomeMsg () {
    console.log(`Hi ${myName}, your current location is ${myLocation}`);
}

myWelcomeMsg();
//===============================================

//========BLOCK SCOPE function: =================

function myFaveColours(colour1, colour2) {
    console.log(`My favourite colours are ${colour1} combined with ${colour2}`);
}

myFaveColours("dark green", "bronze");
//===============================================

//========BLOCK SCOPE function 2: ===============
function multiply1(a, b) {
    return a * b;
}


console.log(multiply1(8, 12));
//===============================================

//========Function 4: ===========================
function greet(colloqialGreetage, userName, howAreYou, punct) {
    console.log(colloqialGreetage + " " + userName + " " + howAreYou + punct);
}

greet("Heya", "Malcolm,", "how are you today", "?");
greet("Howdy", "Rupert,", "What's shakin homie", "?");
greet("Good day", "Bartholemew,", "hope you have been enjoying the weather this week", "!");
greet("Hello", "Daphne,", "how did you find the view", "?");
//===============================================

//========Function 5: ===========================
function add(c, b) {
    return c + b;
}

function subtract(c, b) {
    return c - b;
}

function multiply(c, b) {
    return c * b;
}

function divide(c, b) {
    return c / b;
}

function calculate(c, b, operator) {
    if (operator === "+") {
        return add(c, b);
    } else if (operator === "-") {
        return subtract(c, b);
    } else if  (operator === "*") {
        return multiply(c, b);
    } else if (operator === "/") {
        return divide(c, b);
    }
}

console.log(calculate(8, 16, "+"));
console.log(calculate(64, 24, "-"));
console.log(calculate(24, 64, "*"));
console.log(calculate(40, 4, "/"));

//========Function 5.5: =========================
function calculator(d, e, operator) {
    switch (operator) {
        case "+":
            return add(d, e);
        case "-":
            return subtract(d, e);
        case "*":
            return multiply(d, e);
        case "/":
            return divide(d, e);
    }
}

console.log(calculator(32, 40, "+"));
console.log(calculator(64, 24, "-"));
console.log(calculator(64, 128, "*"));
console.log(calculator(96, 4, "/"));

//===============================================

//========Function 8: ===========================

//buttonTrigger.addEventListener("click", function () {

//})

//===============================================