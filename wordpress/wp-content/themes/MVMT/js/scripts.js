(function ($, root, undefined) {

	$(function () {
		'use strict';
		// DOM ready, take it away
		// Modal
		var modal = document.getElementById("myModal");
		var imgbtn = document.getElementById("msgBubble");
		var span = document.getElementById("close");

		function show() {
		modal.style.display = "block";
		}
		function hide() {
		modal.style.display = "none";
		}

		imgbtn.onclick = function() { show(); }
		span.onclick = function() { hide(); }

		window.onclick = function(event) {
			if (event.target == modal) { hide(); }
		}
		// end Modal

	});
})(jQuery, this);
