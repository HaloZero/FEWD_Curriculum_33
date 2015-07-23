function clickImage(event) {
	$("#main-container img").attr("src", $(event.target).attr('src'));
}

$("#images-container img").click(clickImage);