console.log(document);

//===============Initial Variable Declaration===============//
const mainGiver = document.createElement("main");
const prefaceContainer = document.createElement("h1");
const firstContainer = document.createElement("div");
const secondContainer = document.createElement("div");
const secondContainerH2 = document.createElement("h2");
const thirdContainer = document.createElement("div");
const thirdContainerH2 = document.createElement("h2");
const heroImage = document.createElement("img");
const scp1 = document.createElement("p");
const tcp1 = document.createElement("p");
const tcp2 = document.createElement("p");
const tcul1 = document.createElement("ul");
const tcul1H2 = document.createElement("h2");
const tcli1 = document.createElement("li");
const tcli2 = document.createElement("li");
const tcli3 = document.createElement("li");
const tcli4 = document.createElement("li");
const tcli5 = document.createElement("li");
const tcli6 = document.createElement("li");
// const imgTitle = document.createElement("h2");
const footer = document.createElement("footer");
const header = document.querySelector("header");
const body = document.querySelector("body");
//const containerFirst = document.querySelector("#containerfirst");
const footId = document.querySelector("#footid");
//===============Initial Variable Declaration===============//
//===============Header===============//
header.appendChild(prefaceContainer);
prefaceContainer.textContent = "Knoll House";
//===============Header===============//
//===============Body structure===============//
body.appendChild(mainGiver);
mainGiver.appendChild(firstContainer);
mainGiver.appendChild(secondContainer);
mainGiver.appendChild(thirdContainer);
body.appendChild(footer);
//===============Body structure===============//

//===============First Container===============//
firstContainer.appendChild(heroImage);
heroImage.src = "https://images2.imgbox.com/25/97/zOXIzyZS_o.jpg";
heroImage.className = "hero-image";
heroImage.alt = "Knoll House in Sevenoaks";
//===============First Container===============//
//===============Second Container===============//
secondContainer.appendChild(scp1);
scp1.appendChild(secondContainerH2);
secondContainerH2.textContent = "This is the Knoll House courtyard situated in Sevenoaks.";

//===============Second Container===============//
//===============Third Container===============//
thirdContainer.appendChild(tcp1);
tcp1.appendChild(thirdContainerH2);
thirdContainerH2.textContent = "National Trust and historical places worth visiting:";
thirdContainer.appendChild(tcp2);
tcp2.appendChild(tcul1);
tcul1.className = "estate-list";
tcul1.appendChild(tcul1H2);
tcul1H2.textContent = "Estates";
tcul1.appendChild(tcli1);
tcul1.appendChild(tcli2);
tcul1.appendChild(tcli3);
tcul1.appendChild(tcli4);
tcul1.appendChild(tcli5);
tcul1.appendChild(tcli6);
tcli1.textContent = "Knoll";
tcli2.textContent = "Down House (The home of Charles Darwin)";
tcli3.textContent = "Chartwell House (The home of Winston Churchill)";
tcli4.textContent = "Ham House";
tcli5.textContent = "Polesden Lacey";
tcli6.textContent = "Standen House";
//===============Third Container===============//

//===============Footer===============//
footer.textContent = "History appreciators 2025"
//===============Footer===============//