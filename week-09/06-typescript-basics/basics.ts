// Typescript basics
// file extension --> .ts / .tsx

// Type declarations (also known as annotations)
// We must be specific to typescript so that it knows what type of data we're storing.

// Primitives
let myName: string = "Arron";
// When we specify what our variable type is, we cannot change it later!
console.log(myName);

// myName = 8; // Type 'number' is not assignable to type "string"!!

let myAge: number = 78;

let isInstructor: boolean = false;

// complex data types?

// 2 ways to establish arrays
// First way
const colours: string[] = ["silver", "gold", "bronze", "copper"];
// Second way
const weather: Array<string> = ["cloudy", "sunny", "rainy"];
const misc: (string | number | boolean)[] = ["sun", true, 5];
const misc2: Array<string | number | boolean> = [7, false, "sea"];

// Random fact, || is the operator for 'or'

// Declaring objects in Typescript

const arron: { location: string; age: number; isOmbudsman: boolean } = {
  location: "London",
  age: 91,
  isOmbudsman: false,
};

const bertie: { location: string; age: number; isOmbudsman: boolean } = {
  location: "Leicester",
  age: 120,
  isOmbudsman: false,
};

//Here we declare a type of object

// If a property is optional (like office below) we can add a ? after the property word before the :

// type staffType = {
//   location: string;
//   age: number;
//   isInstructor: boolean;
//   office?: number;
// };

// That we can then use for other object variables

// const tim: staffType = { location: "Norwich", age: 24, isInstructor: true };

// const sam: staffType = { location: "Liverpool", age: 58, isInstructor: true };

const staff: staffType[] = [
  { location: "Lincoln", age: 33, isInstructor: true, office: 6 },
  { location: "Hull", age: 67, isInstructor: true, office: 4 },
  { location: "Nottingham", age: 43, isInstructor: true, office: 9 },
];

//functions

let a; //TS infers type "any" --> a catch all type

// use the ANY type responsibly!
function add(a: number, b: number) {
  return a + b;
}

add(9, 3);

// Union types
// Type declaration that specifies data type and values

type subjectsType = "physics" | "art" | "english" | "maths";

// The eligible values are defined above. If we were to type in the value below of "spanish" instead of "physics", because it is not assigned above it will not accept it as a subjectsType
const course: subjectsType = "physics";

type staffType = {
  location:
    | "Norwich"
    | "London"
    | "Liverpool"
    | "Hull"
    | "Lincoln"
    | "Nottingham";
  age: number;
  isInstructor: boolean;
  office: number;
};
