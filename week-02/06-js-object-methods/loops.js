//loops

//We use loops to make repetitive tasks more efficient.
//We need to consider the amount of times we want a task to be executed

//if we know the amount of times we want to execute a task --> for loop
// task example: I want to create 5 paragraphs in my DOM
// task example: I want to log in the console all the items in an array

//structure
// keyword (config) {
// actions
// }

//A for loop always has the following structure
// for (initialisation; condition; afterthought) {
//   //task
// }
//

//Be careful with your condition. AVOID making an infinite loop or your computer will crash!
//
for (let i = 0; i <= 5; i++) {
  console.log(`This is a task repeated multiple times. Check how many? ${i}`);
}

//TODO: I want to create 5 paragraphs in my DOM
for (let i = 0; i <= 4; i++) {
  //create element
  const paragraph = document.createElement("p");
  //update the text content
  paragraph.id = `post-header-${i}`;
  paragraph.textContent = `Blog Post ${i}`;
  //append the element to the DOM
  const container = document.getElementById("post-container");
  container.appendChild(paragraph);
  const postBody = document.createElement("p");
}

//For Loops with arrays
const colours = ["Blue", "Purple", "Yellow", "Green"];

//TODO: I want to log all the colours in the console!

//The initialization should start at 0 to make sure to catch the start of the array!
//if the condition on this one is set to <= instead of < it will return an undefined!
//We use the array length property as our condition!
for (let i = 0; i < colours.length; i++) {
  console.log(`Item: ${colours[i]}`);
}

//array methods
//it has a forEach() method embedded!
colours.forEach(function (colour) {
  console.log(colour);
});

//for - of
//is a simplified syntax of a for loop!
for (let colour of colours) {
  console.log(colour);
}

//=================================
//while loops
//A Loop to use when we don't know how many times we want to run a task

//Task Example: While the user is not logged in, ask for login info

//structure
// while (i <= 5) {
//   //task
// }

// let user = "";

// while (!user) {
//   console.log("Please, log in!");
// }

//During the time a loop is transpiring, the rest of the code is stopped being read until the loop condition is met or the loop is finished in some way.
