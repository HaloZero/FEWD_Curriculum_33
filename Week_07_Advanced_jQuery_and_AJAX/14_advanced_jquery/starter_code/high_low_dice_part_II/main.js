// Exercise: Use event.target to make the functions high, seven, and low into one function

var score = 0;

function addToScore(scoreChange) {
  score = score + scoreChange;
  $("#score").text(score);
}

function high() {
  var diceRoll = rollADice() + rollADice();
  $("#dice_roll").text(diceRoll);
  if (diceRoll > 7) {
    addToScore(1);
    $("#status").text("You win!");
  } else {
    addToScore(-1);
    $("#status").text("You lost!");
  }
}

function seven() {
  var diceRoll = rollADice() + rollADice();
  $("#dice_roll").text(diceRoll);
  if (diceRoll === 7) {
    addToScore(1);
    $("#status").text("You win!");
  } else {
    addToScore(-1);
    $("#status").text("You lost!");
  }
}

function low() {
  var diceRoll = rollADice() + rollADice();
  $("#dice_roll").text(diceRoll);
  if (diceRoll < 7) {
    addToScore(1);
    $("#status").text("You win!");
  } else {
    addToScore(-1);
    $("#status").text("You lost!");
  }
}

$("#high").click(high);
$("#seven").click(seven);
$("#low").click(low);