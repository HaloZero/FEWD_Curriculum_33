var score = 0;

function addToScore(scoreChange) {
  score = score + scoreChange;
  document.getElementById("score").innerHTML = score;
}

function high() {
  var diceRoll = rollADice() + rollADice();
  document.getElementById("dice_roll").innerHTML = diceRoll;
  if (diceRoll > 7) {
    addToScore(1);
    document.getElementById("status").innerHTML = "You WIN";
  } else {
    addToScore(-1);
    document.getElementById("status").innerHTML = "You lost";
  }
}

function seven() {
  var diceRoll = rollADice() + rollADice();
  document.getElementById("dice_roll").innerHTML = diceRoll;
  if (diceRoll === 7) {
    addToScore(1);
    document.getElementById("status").innerHTML = "You WIN";
  } else {
    addToScore(-1);
    document.getElementById("status").innerHTML = "You lost";
  }
}

function low() {
  var diceRoll = rollADice() + rollADice();
  document.getElementById("dice_roll").innerHTML = diceRoll;
  if (diceRoll < 7) {
    addToScore(1);
    document.getElementById("status").innerHTML = "You WIN";
  } else {
    addToScore(-1);
    document.getElementById("status").innerHTML = "You lost";
  }
}


document.getElementById("high").onclick = high;
document.getElementById("seven").onclick = seven;
document.getElementById("low").onclick = low;