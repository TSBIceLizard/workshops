//For loop
// for (let i = 0; i < 10; i++) {
//   console.log(`This increment is # ${i}`);
//}
//This loop will cap at 10 increment attempts.
//Never create an infinite loop

//while loop
// let counter = 1;

// while (counter <= 5) {
//   console.log(counter);
//   counter++;
// }

//This code made my browser hang, didn't like it
// let keepLooping = false;
// let i = 0;
// while (keepLooping === false) {
//   console.log("Iteration", i);
//   keepLoopng = Math.random() < 0.1;
//   i++;
// }

//Looping over arrays
// const foods = [
//   "Cornish Pasty",
//   "Marscapone Pizza",
//   "Brie Cheese",
//   "Guylians Chocolate",
// ];

// for (let i = 0; i < foods.length; i++) {
//   console.log(foods[i]);
// }

//const

const myArray = [3, 6, 8, 5];

function loop(total, array) {
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
    console.log(`Current index is ${i}, current item is ${array[i]}`);
  }
  console.log("Total is:");
  return total;
}

console.log(loop(0, myArray));
