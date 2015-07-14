var score = 0;

function zero() {
  score = 0;
  document.getElementById('result').innerHTML = score;
}
function addFive() {
  score = score + 5;
  document.getElementById('result').innerHTML = score;
}

function addTen() {
  score = score + 5;
  document.getElementById('result').innerHTML = score;
}

function minusOne() {
  score = score - 1;
  document.getElementById('result').innerHTML = score;
}

document.getElementById('zero').onclick = zero;
document.getElementById('add5').onclick = addFive;
document.getElementById('add10').onclick = addTen;
document.getElementById('sub1').onclick = minusOne;

