// Runner for the exercises
function check(num, answer) {
  if(answer) {
	$("body").append("<p>Question " + num + ": Correct!</p>");
  } else {
	$("body").append("<p style=\"color:red;\">Question " + num + ": Try Again.</p>");
  }
  $("body").append("<p>- - - - - - - - - - - - - - - - - - - - - -</p>");
}

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
	if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}


check(1, q1 && q1.length == 3 && q1[0] == 'image1.jpg' && q1[1] == 'image2.jpg' && q1[2] == 'image3.jpg');
check(2, q2 && q2 == 'Pac-Man');
check(3, q3 && q3 == 'image1.jpg');
check(4, q4 && q4.length == 3 && q4[0] && q4[0]['class_to_add'] == 'super-pac-man');
check(5, q5 && q5['class_to_add'] && q5['class_to_add'] == 'super-pac-man');
check(6, q6 && q6 == 'super-pac-man');
$("body").append("<h3>Checking Complete!</h3>");

var $pacMan = $("img").eq(0);

if ($pacMan.hasClass("super-pac-man")) {
  $pacMan.parent().attr("id", "container");
  $pacMan.animate({
    left: "+=450"
  }, 3000, function() {

  });
  setTimeout(function() {
    $("img").eq(1).fadeOut();
  }, 1000)
  setTimeout(function() {
    $("img").eq(2).fadeOut();
  }, 1800)
}