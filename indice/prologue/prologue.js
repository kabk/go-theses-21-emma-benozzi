
// activate the close button
$(".close-button").click(function () {
	// hide the popup
$('.popup').hide();
});

// activate the navigation links
$(".menu-item").click(function () {
  // hide popup in case one is open
  $('.popup').hide();
	// get the id of the clicked menu item
	var id = $(this).attr('id');
  // use it to open the connected popup
	$("#popup-" + id).show();
});
