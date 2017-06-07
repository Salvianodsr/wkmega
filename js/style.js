$(".btn-menu").click(function(event) {
	$(".menu").show();
});
$(".btn-close").click(function(event) {
	$(".menu").hide();
});

/*sigestões*/
$(document).mouseup(function (e) {
  var container = $('#contact-panel');
  if (!container.is(e.target) // if the target of the click isn't the container...
  && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.removeClass('is-active');
    }
});

