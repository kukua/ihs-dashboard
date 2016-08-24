@extends ('layout.default')

@section('content')
	<div id="map"></div>

	<div id="sidebar">
		<h3 class='js-station-name'>--</h3>
		<div class="panel-group" id="accordion" role="tablist" area-multiselectable="true">
			<div class="panel panel-default">
				<div class="panel-heading" role='button' data-toggle="collapse" data-parent="#accordion" href="#currentWeather" aria-expanded="true" aria-controls="currentWeather">
					<h4>Current weather <i class="glyphicon glyphicon-chevron-down pull-right"></i></h4>
				</div>
				<div id='currentWeather' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='currentWeather'>
					<div class="panel-body">
						<h3>Wind: <span class='js-station-current-wind'></span> km/h</h3>
						<h3>Gusts: <span class='js-station-current-gust'></span> km/h</h3>
						<p class='js-station-current-weather'>&nbsp;</p>
					</div>
				</div>
			</div>
			<div class="panel panel-default">
				<div class='panel-heading collapsed' role="button" id='headingTwo' data-toggle="collapse" data-parent="#accordion" href="#forecast" aria-expanded="true" aria-controls="forecast">
					<h4>Forecast <i class="glyphicon glyphicon-chevron-down pull-right"></i></h4>
				</div>
				<div id='forecast' class='panel-collapse collapse' role='tabpanel' aria-labelledby='forecast'>
					<div class="panel-body">
						<h3>Wind: <span class='js-station-forecast-wind'></span> km/h</h3>
						<h3>Gusts: <span class='js-station-forecast-gust'></span> km/h</h3>
						<p class='js-station-forecast-weather'>&nbsp;</p>
					</div>
				</div>
			</div>
			<div class="panel panel-default">
				<div class='panel-heading collapsed' role="button" data-toggle="collapse" data-parent="#accordion" href="#graphs" aria-expanded="true" aria-controls="graphs">
					<h4>Graphs <i class="glyphicon glyphicon-chevron-down pull-right"></i></h4>
				</div>
				<div id='graphs' class='panel-collapse collapse' role='tabpanel' aria-labelledby='graphs'>
					<div class="panel-body">
						the graphs
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
