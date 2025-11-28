//an event handler is what handles an action
//user element to trigger the action event handler -> event listener
//examples of user element or interaction
//button, input, checkbox, search bar, video controls, images, scroll bar, etc


//===============Initial Variable Declaration===============//
const header = document.querySelector("header");
const body = document.querySelector("body");
const mainGiver = document.createElement("main");
const prefaceContainer = document.createElement("h1");
const firstContainer = document.createElement("div");
const secondContainer = document.createElement("div");
//const heroImage = document.createElement("img");
const meaningfulBtn = document.querySelector(".meaningful-button");
const meaningfulBtnClick = document.createElement("h2");
const keyPressAct = document.createElement("h2")
const heroImage = document.getElementById("hero-image");


console.log(meaningfulBtn);

meaningfulBtn.addEventListener("click", function () {
    console.log("WOW You clicked that button with superb elegence.");
    meaningfulBtnClick.textContent = "You clicked that button! DANG!";
    mainGiver.appendChild(meaningfulBtnClick);
});

heroImage.addEventListener("click", function () {
   const imageTitle = document.createElement("h2");
   console.log(imageTitle);
   imageTitle.textContent = "Knoll front tower.";
   document.body.appendChild(imageTitle);
});

document.body.addEventListener("keydown", function() {
    console.log("I felt that click!");
})

//===============Body structure===============//
body.appendChild(mainGiver);

//===============Body structure===============//