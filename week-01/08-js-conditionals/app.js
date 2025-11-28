console.log("Hello world!");
let weather = "sunny";
let apples = 6;
let pears = 8;
let cherries = "4";
let userGaryAge = 15;
let userRaphaelAge = 19;
let userBarberaAge = 18;
let movieName1 = "The Stabbening";
let movieName2 = "Johnson Tram's Stand up Comedy: Vol#1";
let movieName3 = "Voxar's: Magma age";
const adultMovieRating = 18;
const matureMovieRating = 15;
const lowMatureMovieRating = 12;
//if (condition) {}


//example: If the weather is rainy, then? Carry umbrealla.

if (weather == "rainy") {
    console.log(`Okay it is ${weather} Umbrella ACTIVATED!!!`);
} else if (weather == "sunny") {
    console.log("OH YES BABY, THE SUN IS SHINING!");
} else if (weather == "foggy") {
    console.log("Ohhhh damn! A little foggy! Might need to get out my flashlight!");
} else {
    console.log("Well what is going on with the weather then?!?!");
}

//the == double equals doesn't look at data types, and doesn't differentiate between string, integer, etc! To ensure the DATA TYPE also matches, use === triple equals!!

//The else if (apples === pears && pears === cherries) {} conditional mandates that BOTH conditions either side of the && MUST be true to trigger!

if (apples < 1) {
    console.log(`What do you want, less apples or something?! You already have ${apples};`);
} else if (apples > pears) {
    console.log("Woah woah woah steady on there cowboy. With this many apples you will start having cyanide coursing through your bloodstream!");
} else if (apples <= cherries) {
    console.log("I can see you are extremely OCD about fruit!");
} else if (apples === pears && pears === cherries) {
    console.log("You follow the way of balance in the universe. Tranquility achieved.");
} else {
    console.log("Why don't you start asking better questions?");
}

//3 youngsters are trying to buy a 18 age rated horror movie. They are a veriety of different ages. The movie is called 'The Stabbening'. However, they need to be older than the variable of adultMovieRating which is locked at 18!

//Gary attempts to buy the movie. Gary is quite young and is trying to convince the move rental store that he is older.

if (userGaryAge >= adultMovieRating) {
    console.log(`Yes Gary you are definately ${adultMovieRating}, please take this 18 age gated movie${movieName1}!`);
} else {
    console.log(`Woah there my miniature compadre! This movie ${movieName1} is way too mature for you! You will not be able to buy this until you are older!`);
}

//Raphael attempts to purchase the movie, Raphael is rather tall and is hard to mistake his age.
if (userRaphaelAge >= adultMovieRating) {
    console.log(`You want to buy this movie ${movieName1}, young man? I can see that you are over ${adultMovieRating}, you even might be closer to ${userRaphaelAge}! Here you go!`);
} else {
    console.log(`Is someone there? I can see someone but I forgot to put my glasses on. Sorry but you don't look over ${adultMovieRating} to me so you're going to have to go home! Kids look so much older than they are these days!`);
}

//Barbera is exactly 18, the comparation operator below which is >= means that the person will be OLDER or GREATER than the age of adultMovieRating. Barbera will technically be able to buy this movie.
if (userBarberaAge >= adultMovieRating) {
    console.log(`Welcome to my movie store mamm, I can see that you are old enough for me to sell you ${movieName1}. Just be warned this movie has given people of the faint of heart nightmares before! Enjoy the ${weather} day!`);
} else {
    console.log(`Hi miss, I apologise but I can't verify that you are of the age of ${adultMovieRating} in order for me to sell you ${movieName1}. If you come back with identification though I will be able to sell you it.`)
}

//This time, because Gary couldn't buy The Stabbening which is an 18+ he attempts to buy a 15 rated comedy DVD that's less intense.
if (userGaryAge >= matureMovieRating) {
    console.log(`Okay! Considering you are old enough to buy ${movieName2}, here you go!`);
} else {
    console.log(`I'm fed up with you kids trying to trick me! We're closed! I don't trust that you are ${matureMovieRating}`);
}

//This time Gary tries to buy a much lower age gated movie.
if (userGaryAge >= lowMatureMovieRating) {
    console.log(`Fine! You can buy ${movieName3}, I'm pretty sure you atleast have to be over ${lowMatureMovieRating}!`);
} else {
    console.log(`Not again! SCRAM!`);
}