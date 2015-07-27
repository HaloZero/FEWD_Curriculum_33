// Exercise: Use event.target to make the functions high, seven, and low into one function

var score = 0;

function addToScore(scoreChange) {
  score = score + scoreChange;
  $("#score").text(score);
}

function guess(event) {
  var diceRoll = rollADice() + rollADice();
  $("#dice_roll").text(diceRoll);
  var buttonId = $(event.target).attr("id");
  if ((diceRoll > 7 && buttonId == "high") || 
    (diceRoll === 7 && buttonId == "seven") || 
    (diceRoll < 7 && buttonId == "low")) {
    addToScore(1);
    $("#status").text("You win!"); 
  } else {
    addToScore(-1);
    $("#status").text("You lost!");
  }
}

$("#high").click(guess);
$("#seven").click(guess);
$("#low").click(guess);