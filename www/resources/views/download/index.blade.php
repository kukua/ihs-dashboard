@extends ('layout.default')

@section('content')
	<div class="container" style="padding-top: 80px">
		<form method="post" action="/download/request">
			<div class="row">
				<div class="col-sm-6 col-sm-offset-3">
					<div class="input-daterange input-group" id="datepicker">
						<input type="text" class="input-sm form-control" name="start" placeholder="From" />
						<span class="input-group-addon">to</span>
						<input type="text" class="input-sm form-control" name="end" placeholder="To" />
					</div>

					<center style="margin-top: 20px">
						<input type="hidden" name="_token" value="{{ csrf_token() }}">
						<button class="btn btn-primary" type="submit">Download</button>
					</center>
				</div>
			</div>
		</form>
	</div>
@endsection
