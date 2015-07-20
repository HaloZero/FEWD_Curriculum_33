var score = 0;

function addToScore(scoreChange) {
  score = score + scoreChange;
  document.getElementById("score").innerHTML = score;
}

function updateStatus(userWon) {
  if (userWon) {
    addToScore(1);
    document.getElementById("status").innerHTML = "You WIN";
  } else {
    addToScore(-1);
    document.getElementById("status").innerHTML = "You lost";
  }
}

function high() {
  var diceRoll = rollADice() + rollADice();
  document.getElementById("dice_roll").innerHTML = diceRoll;
  var userWon = diceRoll > 7;
  updateStatus(userWon);
}

function seven() {
  var diceRoll = rollADice() + rollADice();
  document.getElementById("dice_roll").innerHTML = diceRoll;
  var userWon = diceRoll === 7;
  updateStatus(userWon);
}

function low() {
  var diceRoll = rollADice() + rollADice();
  document.getElementById("dice_roll").innerHTML = diceRoll;
  var userWon = diceRoll < 7;
  updateStatus(userWon);
}


document.getElementById("high").onclick = high;
document.getElementById("seven").onclick = seven;
document.getElementById("low").onclick = low;