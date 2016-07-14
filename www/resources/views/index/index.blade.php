@extends ('layout.default')

@section('content')
	<div id="map"></div>
	<div id="sidebar">
		<h2>Station name</h2>
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">Current weather</h3>
			</div>
			<div class="panel-body">
				<h1>20°C</h1>
				Cloudy, and low wind speeds.
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
