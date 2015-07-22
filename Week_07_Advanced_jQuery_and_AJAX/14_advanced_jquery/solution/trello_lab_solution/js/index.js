$(".list button").click(function(event) {
  var button = $(event.target);
  var list = button.prev().prev();
  var input = button.prev();
  var newTaskText = input.val();
  list.append($("<li>").text(newTaskText));
});

