function exercise1() {
  var a = add(1, 2);
  var b = add(10, 6);
  var c = add(a,b);
  checkValue(19, c, "exercise-1");
}

function exercise2() {
  var a = sub(10, 2);
  var b = sub(25, 5);
  var c = sub(b,a);
  checkValue(12, c, "exercise-2");
}

function exercise3() {
  var a = max(5, -1);
  var b = max(10, 3);
  var c = max(a, b);
  checkValue(10, c, "exercise-3");
}

function exercise4() {
  var a = min(5, -1);
  var b = min(10, 3);
  var c = min(a, b);
  checkValue(-1, c, "exercise-4");
}

function exercise5() {
  var a = minOf3(5, -1, 10);
  var b = minOf3(10, 3, 1);
  var c = minOf3(a, b, -5);
  checkValue(-5, c, "exercise-5");
}

function exercise6() {
  var a = maxOf3(5, -1, 10);
  var b = maxOf3(111, 3, 1);
  var c = maxOf3(a, b, -5);
  checkValue(111, c, "exercise-6");
}

function exercise7() {
  var a = maxOfAll(5, 10, 111, 55);
  var b = maxOfAll(1, 1, 1, 1, 1, 1, 5, 10);
  var c = maxOfAll(a, b, 501, 1);
  checkValue(501, c, "exercise-7");
}

function exercise8() {
  var a = minOfAll(5, 10, 111, 55);
  var b = minOfAll(1, 1, 1, 1, 1, 1, 5, 10);
  var c = minOfAll(a, b, 501, -1);
  checkValue(-1, c, "exercise-8");
}

function checkValue(value, correctValue, elementId) {
  if (value == correctValue) {
    document.getElementById(elementId).className = "success";
  } else {
    document.getElementById(elementId).className = "error";
  }
}

document.getElementById("exercise-1").onclick = exercise1;
document.getElementById("exercise-2").onclick = exercise2;
document.getElementById("exercise-3").onclick = exercise3;
document.getElementById("exercise-4").onclick = exercise4;
document.getElementById("exercise-5").onclick = exercise5;
document.getElementById("exercise-6").onclick = exercise6;
document.getElementById("exercise-7").onclick = exercise7;
document.getElementById("exercise-8").onclick = exercise8;
