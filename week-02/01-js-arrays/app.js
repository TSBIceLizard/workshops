//Arrays

//We use arrays to store multiple values at a time

//let arrayName = ["value1", "value2", "value3"];

const myFavouriteThings = ["rain", 27, true, "nature"];

//8 length variable
const compassDirections = ["North", "South", "East", "West", "North-East", "South-East", "South-West", "North-West"];

//Chain of comments in a comment section
const commentSectionPosts = ["First blog post blah blah", "Original poster, I don't know what you mean in all honesty. My blog post was a single second later than yours but i technically wouldn't call yours first", "Hi second poster, I think everyone can agree that the OP was first to comment, and I'm sorry this is difficult for you to accept. Yours may have been a second later but technically it still makes him first. Thanks for your time, Sebasti Reginald", "Sebasti Reginald, I was merely posting out the original posters pedantacism. This was blatantly obvious and sorry I have to extrapolate this! Kindly, Gerry Montgomery.", "I'm locking this comment section as it seems to have devolved to childish bickering. Please don't do this again. -Admin team"]

//ARRAY PROPERTIES
//First one is index
//Last one is length
//The first item starts at index 0 (not index 1)!
//So if you have 3 values, the last one will be index 2!

myFavouriteThings[0];
console.log(myFavouriteThings[3]);

//length is a number which tells us the total amount of items in an array
//The length of myFavouriteThings is 4, as it has 4 items. This is different to the index which considers the first variable in an array as 0, index is it's own separate system!

myFavouriteThings.length;
console.log(myFavouriteThings.length);

compassDirections.length;
console.log(compassDirections.length);

compassDirections[5];
console.log(compassDirections[5]);

commentSectionPosts[0];
commentSectionPosts[1];
commentSectionPosts[2];
commentSectionPosts[3];
commentSectionPosts[4];
console.log(commentSectionPosts[0]);
console.log(commentSectionPosts[1]);
console.log(commentSectionPosts[2]);
console.log(commentSectionPosts[3]);
console.log(commentSectionPosts[4]);

//Tried to use code to track the index of an array, not quite sure how to use this yet though!
//myFavouriteThings.findIndex;
//console.log(myFavouriteThings.findIndex);

//PURPOSE OF ARRAYS
//Arrays are useful for grouping multiple variables together.
//An example in relation to web development might be -> Blog posts, forum posts, comments, on a single website section.
//You can also have arrays inside other arrays, but I'm not sure how that works yet!