console.log("Hello World!");

//let userNameOne = "Arron";


//FUNCTIONS
//To organize complex tasks
//Functions are re-usable!!!

//EXAMPLES

//Function Welcomes the user in console


function sayWelcome() {
    console.log("Welcome");
}

//A parameter is a placeholder in the function that we can replace later with a more meaningful value!
function sayName(userNameOne) {
    console.log(`Your name is ${userNameOne}`);
}

//To execute or call upon a function we must "INVOKE" it!
//We can call the same function over and over!
sayWelcome();

//arguments -> an argument(s) is a value assigned to a parameter
sayName("Arron");

//An interesting note about functions:
//The invoke of these functions can be either before or after the definition of the function. The console will ignore them completely UNTIL they are invoked! As soon as you invoke it, the compiler will then look for where the function is defined. In this case, when sayWelcome(); is called, it will then stop being aloof about this function and look for exactly where it's defined!

//SCOPE --> Scope is the area in which my code is available!
//GLOBAL SCOPE --> Is available everywhere in your project!
//BLOCK SCOPE --> value is available only within its code block

//TASK: Add TWO NUMBERS and LOG them!

//Method 1
// function add(a, b) {
//     console.log(a + b);
// }

// add(2, 5);

//Method 2
function add(a, b) {
    return a + b;
}
//return will return the value of a + b

//Sets the value of 'a' and 'b' (calls the function in the console log(a, b))
console.log(add(4, 6));