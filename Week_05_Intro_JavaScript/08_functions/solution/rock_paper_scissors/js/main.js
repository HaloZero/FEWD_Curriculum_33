var humanScore = 0;
var botScore = 0;

function chooseRock() {
  var humanChoice = "rock";
  var botChoice = botChooseType();
  if (botChoice == "scissors") {
    humanWon(humanChoice, botChoice);
  } else if (botChoice == "paper") {
    botWon(humanChoice, botChoice);
  } else {
    tieGame(humanChoice, botChoice);
  }
}

function chooseScissors() {
  var humanChoice = "scissors";
  var botChoice = botChooseType();
  if (botChoice == "paper") {
    humanWon(humanChoice, botChoice);
  } else if (botChoice == "rock") {
    botWon(humanChoice, botChoice);
  } else {
    tieGame(humanChoice, botChoice);
  }
}

function choosePaper() {
  var humanChoice = "paper";
  var botChoice = botChooseType();
  if (botChoice == "scissors") {
    humanWon(humanChoice, botChoice);
  } else if (botChoice == "rock") {
    botWon(humanChoice, botChoice);
  } else {
    tieGame(humanChoice, botChoice);
  }
}

function humanWon(humanChoice, botChoice) {
  var statusText = baseStatusText(humanChoice, botChoice) + " You won!";
  humanScore += 1;
  document.getElementById('status').innerHTML = statusText;
  document.getElementById('humanScore').innerHTML = humanScore;
}

function botWon(humanChoice, botChoice) {
  var statusText = baseStatusText(humanChoice, botChoice) + " You lost!";
  botScore += 1;
  document.getElementById('status').innerHTML = statusText;
  document.getElementById('botScore').innerHTML = botScore;
}

function tieGame(humanChoice, botChoice) {
  var statusText = baseStatusText(humanChoice, botChoice) + " You lost!";
  document.getElementById('status').innerHTML = statusText;
}

function baseStatusText(humanChoice, botChoice) {
  return "The bot played " + botChoice + " and you played " + humanChoice + ".";
}

function botChooseType() {
  var choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random()*3)];
}

document.getElementById("rock").onclick = chooseRock;
document.getElementById("scissors").onclick = chooseScissors;
document.getElementById("paper").onclick = choosePaper;
