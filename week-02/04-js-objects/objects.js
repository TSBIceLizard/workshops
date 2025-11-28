//Example of objects in JS!
//A property isn't just the key. The key is the name of the property. The entire property is the key name and the value!!
//Don't use the same keys twice in the same object!

// const objectName = {
//     key: "value",
//     key: "value",
//     key: "value",
//     key: "value",
// };

//Key -> value pairs are separated by a , Check the syntax above!

//A METHOD:
//When an object contains a function as a propety, this is known as a method! Methods can attach behaviour to objects

//example
//This object has 3 properties.
//This object also technically constitutes as what's called a "Complex object", due to it's use of arrays and objects within objects!

//========CITY OBJECTS=============
const city = [
  {
    cityName: "London",
    population: 10000000,
    hasTrainStation: true,
    cityColours: ["Light Brown", "Pale Brown", "Chrome", "Maroon", "Dark Gray"],
    companies: [
      {
        companyName: "Bank of England",
        staffNumber: 783,
        fields: ["Finance", "Legal"],
      },
      {
        companyName: "Greenwich University",
        staffNumber: 622,
        fields: ["Education", "Science"],
      },
    ],
    counties: ["Surrey", "Greater London"],
    financialCenter: true,
  },
  {
    cityName: "Birmingham",
    population: 8000000,
    hasTrainStation: true,
    cityColours: [
      "Light Brown",
      "Red",
      "Pale Brown",
      "Maroon",
      "Pale Yellow",
      "Dark Gray",
      "Ocean Blue",
    ],
    companies: [
      {
        companyName: "Sound of Birmingham",
        staffNumber: 57,
        fields: ["Music", "E-Commerce", "Education"],
      },
    ],
    counties: ["Atherstone", "Nuneaton"],
    financialCenter: true,
  },
];
//=================================
//========BLOG POST OBJECTS========
const blogPost = [
  {
    chronoOrder: 0,
    postTime: "5:02pm on 12/5/2024",
    author: {
      posterUsername: "BarrySolo",
      realName: "N/A",
      age: 51,
      occupation: "Programming Consultant",
    },
    subject: "Javascript Appreciators blog open!",
    messageContent: "Here i talk about JS! Hope you enjoy!",
  },
  {
    chronoOrder: 1,
    postTime: "3:55pm on 14/5/2024",
    author: {
      posterUsername: "The Wrathful Scotsman",
      realName: "Nigel Pellican",
      age: 39,
      occupation: "Website developer",
    },
    subject: "Some notes about JavaScript that's worth knowing",
    messageContent:
      "Hi all, here's some words about JavaScript aslong with a general preface: JavaScript is NOT related to Java. Javascript is typically used to build the functionality of the web. Any website you visit that's beyond 2002 will have JavaScript built into it - and while that's not a hard rule ...",
  },
];
//=================================
// The object below contains a method
//========CLOWN WITH METHOD========
const clown = {
  stageName: "Wacky Wallace",
  costumeType: "Classic Clown",
  costumeColour: "Red and White",
  serviceYears: 11,
  instrumentSound: "HONK!",
  clownGreet: function () {
    console.log(
      `Hi all, WACKY WALLACE IS IN TOWN! ${this.instrumentSound} ${this.instrumentSound}`
    );
  },
};
//=================================

//Access the data inside

city.cityName;
console.log(city.cityName);

city.population;
console.log(`In ${city.cityName} there are over ${city.population} people!`);

city.hasTrainStation;
console.log(`Has Trainstation: ${city.hasTrainStation}`);

//city.cityColours;
//console.log(`in ${city.cityName} there are colours like ${city.Colours}`);

//adds a new property to the object of City!
//DISCLAIMER: I added this code before changing the county property to an array!
//city.county = "Surrey";

//Can be updated later on in the code!
//city.county = "Greater London";

console.log(city);
console.table(city);

//Object methods:
//Object methods is the name for a function inside of an object!
//console is an object, and log is a property that has a function in it's value!

const staff = {
  staffName: "Arron",
  staffRole: "Instructor",
  staffGreeting: function (greeting) {
    console.log(greeting);
  },
  getStaffName: function () {
    return staff.staffName;
  },
};

//The key is used to call the method since the value is an anonymous function
staff.staffGreeting("Heya!");
console.log(staff.getStaffName());

//These work but commented them out to do something below
// console.log(blogPost[0].author.posterUsername);
// console.log(blogPost[0].author.realName);
// console.log(blogPost[0].author.age);
// console.log(blogPost[0].author.occupation);
// console.log(blogPost[0].subject);
// console.log(blogPost[0].messageContent);

console.log(`Initial post by ${blogPost[0].author.posterUsername} wrote a blog post at ${blogPost[0].postTime} with the subject: ${blogPost[0].subject} with the content 
    
    ${blogPost[0].messageContent}
    
    End of message content.`);

//=================================

//========Clown Calls==============
console.log(`Uh oh, ${clown.stageName} just appeared!`);
clown.clownGreet();
