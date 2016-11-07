@extends ('layout.default')

@section('content')
	<div id="map"></div>

	<div id="tooltip">
		<p>
			At first, this map shows demo data. The colored markers shows which stations have high wind speeds in a glimpse.<br />
			Click the button below to load real data and reset the markers.
		</p>
		<button id="fetch-btn" class="btn btn-primary btn-block">Fetch live data</button>
	</div>

	<div id="sidebar">
		<h3 class='js-station-name'>--</h3>
		<div class="panel-group" id="accordion" role="tablist" area-multiselectable="true">
			<div class="panel panel-default">
				<div class="panel-heading" role='button' data-toggle="collapse" data-parent="#accordion" href="#currentWeather" aria-expanded="true" aria-controls="currentWeather">
					<h4>Current weather <i class="glyphicon glyphicon-chevron-down pull-right"></i></h4>
				</div>
				<div id='currentWeather' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='currentWeather'>
					<div class="panel-body">
						<h3>Temp: <span class='js-station-current-temp'></span> °C</h3>
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
						<div>
							<!-- Nav tabs -->
						  	<ul class="nav nav-tabs" role="tablist">
								<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Temp</a></li>
						    	<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Wind</a></li>
						    	<li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Gust</a></li>
						    	<li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Rain</a></li>
							</ul>

							<!-- Tab panes -->
						  	<div class="tab-content">
								<div role="tabpanel" class="tab-pane active" id="home"><img src="/assets/images/chart.png" class="img-responsive"></div>
						  	  	<div role="tabpanel" class="tab-pane" id="profile"><img src="/assets/images/chart.png" class="img-responsive"></div>
						  	  	<div role="tabpanel" class="tab-pane" id="messages"><img src="/assets/images/chart.png" class="img-responsive"></div>
						  	  	<div role="tabpanel" class="tab-pane" id="settings"><img src="/assets/images/chart.png" class="img-responsive"></div>
						  	</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
