(function(leaflet) {
	'use strict'

	leaflet.constructor = function() {
		leaflet.render();
	}

	leaflet.render = function() {
		var map = L.map('map').setView([51.505, -0.09], 13);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 18,
			id: 'mauvm.0b0g6b9b',
			accessToken: 'pk.eyJ1IjoibWF1dm0iLCJhIjoiQlc2a2RnUSJ9.P4aCXel3FSBMXv5xF5pv9Q'
		}).addTo(map);
	}
})(window.leaflet = window.leaflet || {});
$(document).ready(leaflet.constructor);
