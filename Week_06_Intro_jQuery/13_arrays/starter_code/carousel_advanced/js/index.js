var images = ['images/food1.jpg', 'images/food2.jpg', 'images/food3.jpg', 'images/food4.jpg', 'images/food5.jpg', 'images/food6.jpg', 'images/food7.jpg', 'images/food8.jpg'];
var currentIndex = 0;
var votes = [];

function prevImage() {
  if (currentIndex > 0) {
    currentIndex = currentIndex - 1;
  }
  $("#image-to-display").attr('src', images[currentIndex]);
  $(".progress-meter .progress").removeClass('active');
  $(".progress-meter .progress").eq(currentIndex).addClass('active');
}

function nextImage() {
  if (currentIndex < images.length-1) {
    currentIndex = currentIndex + 1;
  } else {
    calculateVotes();
  }
  $("#image-to-display").attr('src', images[currentIndex]);
  $(".progress-meter .progress").removeClass('active');
  $(".progress-meter .progress").eq(currentIndex).addClass('active');
}

function calculateVotes() {
  var average = 0;
  var sum = 0;
  votes.forEach(function(element) {
    sum += element;
  });
  average = sum/votes.length;
  $("#rating").show();
  $("#score").text(average);
}

$("#prev-button").click(prevImage);

$("#your-vote").change(function() {
  if(currentIndex < images.length) {
    votes[currentIndex] = parseInt($("#your-vote").val());
    $("#your-vote").val(0);
    nextImage();
  }
});
