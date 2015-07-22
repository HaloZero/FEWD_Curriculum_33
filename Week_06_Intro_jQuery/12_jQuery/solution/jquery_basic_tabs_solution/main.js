function openTravel() {
  $("section").hide();
  $("#travel-content").show();
  $("nav a").removeClass('active');
  $("#travel").addClass('active');
}

function openAbout() {
  $("section").hide();
  $("#about-content").show();
  $("nav a").removeClass('active');
  $("#about").addClass('active');
}

function openContact() {
  $("section").hide();
  $("#contact-content").show();
  $("nav a").removeClass('active');
  $("#contact").addClass('active');
}

$("#travel").click(openTravel);
$("#about").click(openAbout);
$("#contact").click(openContact);