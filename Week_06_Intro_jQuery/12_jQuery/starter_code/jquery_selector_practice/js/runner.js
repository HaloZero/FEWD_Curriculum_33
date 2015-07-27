setInterval(function() {
	if ($("h2").hasClass("bigger-font")) {
		$(".actions").eq(0).addClass("success");
	}
}, 200);