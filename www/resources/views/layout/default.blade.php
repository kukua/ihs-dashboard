<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Project Dashibodi</title>
	<link rel="stylesheet" href="/assets/main.min.css" type="text/css">
</head>
<body>

	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="/">My Dashibodi</a>
		</div>
		<div id="navbar" class="collapse navbar-collapse">
			<ul class="nav navbar-nav">
				<li><a href="/download">Downloads</a></li>
			</ul>
		</div>
	</nav>

	@yield('content')

	<script>var config = <?= json_encode(array_only($_ENV, ['LEAFLET_ID', 'LEAFLET_ACCESS_TOKEN'])) ?></script>
	<script src="/assets/main.min.js"></script>
	<script src="https://unpkg.com/leaflet@0.7.7/dist/leaflet.js"></script>
</body>
</html>
