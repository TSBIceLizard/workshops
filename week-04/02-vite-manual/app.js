const username = "Arron";

const reWord = document.getElementById("center-text");

setTimeout(function () {
  reWord.textContent = "Hey look, some textular content appeared!";
}, 10000);

setTimeout(function () {
  reWord.textContent = "Ohh, it changed!";
}, 20000);

setTimeout(function () {
  reWord.textContent = "Hmm ...";
}, 30000);

setTimeout(function () {
  reWord.textContent = "What?!! Again??";
}, 40000);

setTimeout(function () {
  reWord.textContent =
    "Okay, saying this once. Cool of the JavaScript there bucko!";
}, 50000);
