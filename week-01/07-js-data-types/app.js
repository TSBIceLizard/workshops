console.log("Here's some debug text. Wahey!");

//any variables declared as a const do not change. Different to a let
const theNeverChanger = "I am constantly and forever going to be this value";
let myTitle = "My Grand Lord Highness";
let myServantsCount = 12;
let whatWillTheyDo = "shake your hand";
let goldReserves = 6;
let diamondReserves = 9;
let treasuryItems = goldReserves + diamondReserves;
let myRole;
let myLocation = null;

let myAbstractNumber = 5;
let myAbstractSecNumber = "6";

console.log(`I demand you call me ${myTitle} or my team of ${myServantsCount} servants will run outside and ${whatWillTheyDo} and be very courteous to you!!!!`);

console.log(`Watch your step or I might scream and hold on to my ${treasuryItems} treasury stock!!!`);
console.log(`The amount of treasury reserves in our posession is` , treasuryItems);

console.log(typeof myAbstractNumber);
console.log(typeof myAbstractSecNumber);

console.log(typeof myRole); //undefined

//Here we finally give myRole a value instead of leaving it as undefined.
myRole = "Curtain Knitter";

console.log(typeof myRole);

//The myLocation variable is set to a null data type, so the following log message will return as an object.
console.log(typeof myLocation);

//Operators:
//typeof (gets the data type of a variable), + (addition), - (subtraction), * (multiply), / (divide), > (greater than), < (lesser than), >= (greater or equal), <= (lesser or equal).