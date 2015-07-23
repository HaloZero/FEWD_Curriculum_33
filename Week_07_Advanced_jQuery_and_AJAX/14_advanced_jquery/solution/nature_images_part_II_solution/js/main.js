$("#images-container img").click(function(event) {
	var imageSource = $(event.target).attr("src");
	$("#main-container").append($("<img>").attr("src", imageSource));
});