// This function simulates a bot choosing 
// Rock paper or scissors randomly
// This function returns either the string "rock"
// "paper", or "scissors". 
// To use this function, recall how to call a function
// and how to store it's return value into a variable.
function botChooseType() {
  var choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random()*3)];
}
