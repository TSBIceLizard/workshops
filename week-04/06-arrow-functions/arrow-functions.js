// examples of arrow functions

// traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add2 = (a, b) => {
  return a + b;
};

// We can imply the keyword return
const add3 = (a, b) => a + b;

//======================================
// traditional functions
function greet(username) {
  console.log(`Welcome ${username}!`);
}

// Arrow functions
// When there is only one param, you can omit typing the regular rounded brackets! (Even though prettier will just add them after)
const greet2 = (username) => console.log(`Welcome ${username}!`);

//======================================

const array1 = [1, 2, 3];
array1.forEach(function (item) {
  console.log(item);
});

//arrow function
// We can also use the same principles to rewrite callback functions with the arrow function syntax

array1.forEach((item) => {
  console.log(item);
});

//======================================
//Mannys preference
//Uses arrow functions mainly for callback functions and anonymous functions
