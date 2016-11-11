(function(leafmap) {
	'use strict'

	var stations = [
		{
			name: "KUKUA_NGA_00001",
			lat: 7.502222,
			lng: 4.010278,
			temp: 24.3,
			wind: 21.9,
			gust: 25.4,
			weather: 'Hard rain and 18.4°C.',
		},
		{
			name: "KUKUA_NGA_00002",
			lat: 4.7176806,
			lng: 7.1794722,
			temp: 21.3,
			wind: 18.8,
			gust: 20.6,
			weather: 'Its clear and 19.1°C.',
		},
		{
			name: "KUKUA_NGA_00003",
			lat: 7.37257,
			lng: 4.08439,
			temp: 30.6,
			wind: 18.8,
			gust: 20.6,
			weather: 'Rainy and 19.1°C.',
		},
		{
			name: "KUKUA_NGA_00004",
			lat: 9.87777,
			lng: 8.97973,
			temp: 24.0,
			wind: 12.3,
			gust: 30.6,
			weather: 'Its cloudy and 21.3°C.',
		},
		{
			name: "KUKUA_NGA_00005",
			lat: 6.45056,
			lng: 3.42605,
			temp: 16.9,
			wind: 4.6,
			gust: 9.8,
			weather: 'Mostly clear and 23.3°C.',
		},
		{
			name: "KUKUA_NGA_00006",
			lat: 7.502222,
			lng: 3.910278,
			temp: 20.1,
			wind: 21.3,
			gust: 26.9,
			weather: 'Hard rain and 18.3°C.',
		},
		{
			name: "KUKUA_NGA_00008",
			lat: 6.42723,
			lng: 3.41146,
			temp: 31.1,
			wind: 4.3,
			gust: 10.6,
			weather: 'Mostly clear and 25.7°C.',
		},
	];

	leafmap.constructor = function() {
		leafmap.render(stations);
	}

	var defaultMarker = 'assets/images/marker-icon-good.png'
	var warningMarker = 'assets/images/marker-icon-warning.png'
	var dangerMarker = 'assets/images/marker-icon-danger.png'
	var map

	leafmap.render = function(stations) {

		if (map) map.remove()

		map = L.map('map').setView([9.0884563,8.9414364], 7);
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
			} else if (mark.wind > 20 || mark.gust > 20 ||
				typeof mark.wind !== 'number' || typeof mark.gust !== 'number') {
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

					let tempContainer = $('.js-station-current-temp');
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

					tempContainer.html(mark.temp);
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

	leafmap.fetch = function () {
		fetch(config.CONCAVA_API_URL + '/devices?include=labels,measurement', {
			headers: {
				'Authorization': 'Token ' + config.CONCAVA_API_TOKEN,
				'Accept': 'application/json',
			},
		}).then(function (res) {
			return res.json()
		}).then(function (data) {
			var stations = []

			//console.log(data)

			_.each(data, function (device) {
				var lat = _.find(device.labels, function (label) { return label.key === 'latitude' })
				var lng = _.find(device.labels, function (label) { return label.key === 'longitude' })

				if ( ! lat || ! lng) return

				var meas = device.measurement

				stations.push({
					name: device.name,
					lat: lat.value,
					lng: lng.value,
					temp: (meas.temp < 3000      ? meas.temp : 'N/A'),
					wind: (meas.windSpeed < 3000 ? meas.windSpeed : 'N/A'),
					gust: (meas.gustSpeed < 3000 ? meas.gustSpeed : 'N/A'),
					weather: '',
				})
			})

			leafmap.render(stations)
		})
	}

	$('#fetch-btn').click(leafmap.fetch)

})(window.leafmap = window.leafmap || {});
$(document).ready(leafmap.constructor);
