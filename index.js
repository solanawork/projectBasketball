let pointsH = 0;
let pointsG = 0;
let scoreH = document.getElementById("scoreHome");
let scoreG = document.getElementById("scoreGuest");

// following are the functions to add points to home or guest score
function oneH() {
  pointsH += 1;

  scoreH.innerText = pointsH;
}

function twoH() {
  pointsH += 2;

  scoreH.innerText = pointsH;
}

function threeH() {
  pointsH += 3;

  scoreH.innerText = pointsH;
}

function oneG() {
  pointsG += 1;

  scoreG.innerText = pointsG;
}

function twoG() {
  pointsG += 2;

  scoreG.innerText = pointsG;
}

function threeG() {
  pointsG += 3;
  scoreG.innerText = pointsG;
}

// function to reset the scores on both sides (home & guest)
function newGame() {
  pointsH = 0;
  pointsG = 0;
  scoreH.innerText = pointsH;
  scoreG.innerText = pointsG;
}
