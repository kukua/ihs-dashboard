(function(leafmap) {
	'use strict'

	leafmap.constructor = function() {
		leafmap.render();
	}

	leafmap.render = function() {

		var stations = [
			{
				name: "KUKUA_NGA_00004",
				lat: 9.87777,
				lng: 8.97973,
				stationTemp: '21.3°C',
				stationWeather: 'Cloudy and low wind speeds'
			},
			{
				name: "KUKUA_NGA_00006",
				lat: 7.502222,
				lng: 3.910278,
				stationTemp: '19.1°C',
				stationWeather: 'Rain and very high wind speeds'
			},
			{
				name: "KUKUA_NGA_00008",
				lat: 6.42723,
				lng: 3.41146,
				stationTemp: '25.7°C',
				stationWeather: 'Mostly clear, low wind speeds'
			},
		];

		var map = L.map('map').setView([9.0884563,8.9414364], 7);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 18,
			id: config.LEAFLET_ID,
			accessToken: config.LEAFLET_ACCESS_TOKEN
		}).addTo(map);

		for (var i=0; i < stations.length; i++) {
			let mark = stations[i]
			let latlng = L.latLng(mark.lat, mark.lng);

			var marker = L.marker([mark.lat, mark.lng])
				.on('mouseover', function() {
					$('.js-station-name').html(mark.name);
					$('.js-station-current-temp').html(mark.stationTemp);
					$('.js-station-current-weather').html(mark.stationWeather);
				})
				.addTo(map)
		}
	}

})(window.leafmap = window.leafmap || {});
$(document).ready(leafmap.constructor);
