(function(script) {
	'use strict'

	script.constructor = function() {
		script.datepickers();
	}

	script.datepickers = function() {
		$('.input-daterange').datepicker({
			format: "dd-mm-yyyy",
			endDate: "today",
			maxViewMode: 2,
			orientation: "bottom auto"
		});
	}
})(window.script = window.script || {});
$(document).ready(script.constructor);
