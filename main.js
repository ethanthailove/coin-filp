// COIN FLIP SIMULATOR

// HTML variables

let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let diceEl = document.getElementById("dice-out");
let diceoutEl = document.getElementById("dice");

// Count Variables

let numHeads = 0;
let numTails = 0;
let numDices = 0;
// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("dice-btn").addEventListener("click", diceClicked);

function btnClicked() {
  //Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src ='img/heads.png'>";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src ='img/tails.png'>";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}
function diceClicked() {
  let randNum2 = Math.random();
  console.log(randNum2);
  if (randNum2 < 1 / 6) {
    diceoutEl.innerHTML = "<img src='img/1.png'>";
    numDices = numDices + 1;
    diceEl.innerHTML = numDices;
  } else if (randNum2 < 2 / 6) {
    diceoutEl.innerHTML = "<img src ='img/2.png'>";
    numDices = numDices + 1;
    diceEl.innerHTML = numDices;
  } else if (randNum2 < 3 / 6) {
    diceoutEl.innerHTML = "<img src ='img/3dice.png'>";
    numDices = numDices + 1;
    diceEl.innerHTML = numDices;
  } else if (randNum2 < 4 / 6) {
    diceoutEl.innerHTML = "<img src ='img/4dice.png'>";
    numDices = numDices + 1;
    diceEl.innerHTML = numDices;
  } else if (randNum2 < 5 / 6) {
    diceoutEl.innerHTML = "<img src ='img/5dice.png'>";
    numDices = numDices + 1;
    diceEl.innerHTML = numDices;
  } else {
    diceoutEl.innerHTML = "<img src ='img/6dice.png'>";
    numDices = numDices + 1;
    diceEl.innerHTML = numDices;
  }
}
