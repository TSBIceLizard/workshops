console.log("Hello World");

console.log(document);
//console.table(document);
//console.dir(document);
//console.error(document);

//Objective: Replicate my HTML elements with DOM in JS!

//document.createElement("div");

const mainContainer = document.createElement("div");

//console.log(document.createElement("div"));

const heroImage = document.createElement("img");

const imgTitle = document.createElement("h2");

const body = document.querySelector("body");

const containerFirst = document.querySelector("#containerfirst");

// const footId = document.querySelector("footer");

heroImage.className = "hero-image";
//====================================================
//We'll use properties to add content to our new HTML elements!
//for text-based element --> textContent
//for img --> src, alt
//====================================================

heroImage.src = "https://images2.imgbox.com/25/97/zOXIzyZS_o.jpg";
heroImage.alt = "Knoll House in Sevenoaks";
//.width doesn't seem to be how to change the width attribute
//heroImage.width = "1024";

containerFirst.textContent = "Testing information added directly into the body";

console.log(heroImage);
imgTitle.textContent = "Knoll House Courtyard!!";
console.log(imgTitle);

//appendChild() --> we use this method to add our JS created elements to the DOM

mainContainer.appendChild(heroImage);
mainContainer.appendChild(imgTitle);

document.body.appendChild(mainContainer);

//extras
//What if we wanted to style our new HTML elements?

//What if I want to append a new element to an existing HTML element?
//We can select the existing element to be able to interact with it in JS
//getElementById() --> your existing element needs an Id
//querySelector() --> your existing element can be selected using the tag, class or id

const footId = document.appendChild("footer");
//footId.appendChild(imgTitle);

//heroImage.remove();