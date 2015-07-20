var score = 0;

function zero() {
  score = 0;
  updateScore();
}

function addFive() {
  changeScoreBy(5);
}

function addTen() {
  changeScoreBy(10);
}

function minusOne() {
  changeScoreBy(-1);
}

function changeScoreBy(number) {
  score = score - number;
  updateScore();
}

function updateScore() {
  document.getElementById('result').innerHTML = score;
}

document.getElementById('zero').onclick = zero;
document.getElementById('add5').onclick = addFive;
document.getElementById('add10').onclick = addTen;
document.getElementById('sub1').onclick = minusOne;

