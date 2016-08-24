(function(leafmap) {
	'use strict'

	leafmap.constructor = function() {
		leafmap.render();
	}

	leafmap.render = function() {

		var stations = [
			{
				name: "KUKUA_NGA_00001",
				lat: 7.502222,
				lng: 4.010278,
				wind: 21.9,
				gust: 25.4,
				weather: 'Hard rain and 18.4°C.',
			},
			{
				name: "KUKUA_NGA_00002",
				lat: 4.7176806,
				lng: 7.1794722,
				wind: 18.8,
				gust: 20.6,
				weather: 'Its clear and 19.1°C.',
			},
			{
				name: "KUKUA_NGA_00003",
				lat: 7.37257,
				lng: 4.08439,
				wind: 18.8,
				gust: 20.6,
				weather: 'Rainy and 19.1°C.',
			},
			{
				name: "KUKUA_NGA_00004",
				lat: 9.87777,
				lng: 8.97973,
				wind: 12.3,
				gust: 30.6,
				weather: 'Its cloudy and 21.3°C.',
			},
			{
				name: "KUKUA_NGA_00005",
				lat: 6.45056,
				lng: 3.42605,
				wind: 4.6,
				gust: 9.8,
				weather: 'Mostly clear and 23.3°C.',
			},
			{
				name: "KUKUA_NGA_00006",
				lat: 7.502222,
				lng: 3.910278,
				wind: 21.3,
				gust: 26.9,
				weather: 'Hard rain and 18.3°C.',
			},
			{
				name: "KUKUA_NGA_00008",
				lat: 6.42723,
				lng: 3.41146,
				wind: 4.3,
				gust: 10.6,
				weather: 'Mostly clear and 25.7°C.',
			},
		];

		var defaultMarker = 'assets/images/marker-icon-good.png'
		var warningMarker = 'assets/images/marker-icon-warning.png'
		var dangerMarker = 'assets/images/marker-icon-danger.png'

		var map = L.map('map').setView([9.0884563,8.9414364], 7);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
			maxZoom: 18,
			id: config.LEAFLET_ID,
			accessToken: config.LEAFLET_ACCESS_TOKEN
		}).addTo(map);

		for (var i=0; i < stations.length; i++) {
			let mark = stations[i]
			let icon
			let iconurl

			if (mark.wind > 30 || mark.gust > 30) {
				iconurl = dangerMarker
			} else if (mark.wind > 20 || mark.gust > 20) {
				iconurl = warningMarker
			} else {
				iconurl = defaultMarker
			}

			icon = L.icon({
				iconUrl: iconurl,
				iconAnchor: [12, 41],
			});

			var marker = L.marker([mark.lat, mark.lng], {icon})
				.on('mouseover', function() {
					$('.js-station-name').html(mark.name);

					let windContainer = $('.js-station-current-wind');
					let gustContainer = $('.js-station-current-gust');

					windContainer.removeClass('text-danger');
					windContainer.removeClass('text-warning');
					gustContainer.removeClass('text-danger');
					gustContainer.removeClass('text-warning');

					if (mark.wind > 30) {
						windContainer.addClass('text-danger')
					} else if (mark.wind > 20) {
						windContainer.addClass('text-warning')
					}

					if (mark.gust > 30) {
						gustContainer.addClass('text-danger')
					} else if (mark.gust > 20) {
						gustContainer.addClass('text-warning')
					}

					windContainer.html(mark.wind);
					gustContainer.html(mark.gust);

					var random = Math.floor(Math.random() * 11) - 5;

					var forecastWind = mark.wind + random;
					var forecastGust = mark.gust + random;

					$('.js-station-forecast-wind').html(forecastWind.toFixed(1));
					$('.js-station-forecast-gust').html(forecastGust.toFixed(1));
					$('.js-station-current-weather').html(mark.weather);
				})
				.addTo(map)
		}
	}

})(window.leafmap = window.leafmap || {});
$(document).ready(leafmap.constructor);
