@extends ('layout.default')

@section('content')
	<div id="map"></div>

	<div id="sidebar">
		<h3 class='js-station-name'>&nbsp;</h3>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Current weather</h3>
			</div>
			<div class="panel-body">
				<h1 class='js-station-current-temp'>&nbsp;</h1>
				<p class='js-station-current-weather'>&nbsp;</p>
			</div>
		</div>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Forecast</h3>
			</div>
		</div>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Graph</h3>
			</div>
		</div>
	</div>
@endsection
