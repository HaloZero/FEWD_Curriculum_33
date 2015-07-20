$('#primary-nav .international').click(function() {
	$('#primary-nav .international').toggleClass("active");
	$('#primary-nav .international').siblings().removeClass("active");
	if ($("#slide-down").is(":visible") && $('#primary-nav .international').hasClass('active')) {
		$("#slide-down").slideUp();
	} else {
		$("#slide-down").slideDown();
		$("#slide-down .drop").hide();
		$("#slide-down .international").show();	
	}
});

$('#primary-nav .politics').click(function() {
	$('#primary-nav .politics').toggleClass("active");
	$('#primary-nav .politics').siblings().removeClass("active");
	if ($("#slide-down").is(":visible")) {
		$("#slide-down").slideUp();
	} else {
		$("#slide-down").slideDown();
		$("#slide-down .drop").hide();
		$("#slide-down .politics").show();	
	}
});

$('#primary-nav .business').click(function() {
	$('#primary-nav .business').toggleClass("active");
	$('#primary-nav .business').siblings().removeClass("active");
	if ($("#slide-down").is(":visible")) {
		$("#slide-down").slideUp();
	} else {
		$("#slide-down").slideDown();
		$("#slide-down .drop").hide();
		$("#slide-down .business").show();	
	}
});

// $('#primary-nav .international').click(function() {
// 	$('#primary-nav .international').toggleClass("active");
// 	$('#primary-nav .international').siblings().removeClass("active");
// 	if ($("#slide-down").is(":visible")) {
// 		$("#slide-down").slideUp();
// 	} else {
// 		$("#slide-down").slideDown();
// 		$("#slide-down .drop").hide();
// 		$("#slide-down .international").show();	
// 	}
// });

// $('#primary-nav .international').click(function() {
// 	$('#primary-nav .international').toggleClass("active");
// 	$('#primary-nav .international').siblings().removeClass("active");
// 	if ($("#slide-down").is(":visible")) {
// 		$("#slide-down").slideUp();
// 	} else {
// 		$("#slide-down").slideDown();
// 		$("#slide-down .drop").hide();
// 		$("#slide-down .international").show();	
// 	}
// });

// $('#primary-nav .international').click(function() {
// 	$('#primary-nav .international').toggleClass("active");
// 	$('#primary-nav .international').siblings().removeClass("active");
// 	if ($("#slide-down").is(":visible")) {
// 		$("#slide-down").slideUp();
// 	} else {
// 		$("#slide-down").slideDown();
// 		$("#slide-down .drop").hide();
// 		$("#slide-down .international").show();	
// 	}
// });

