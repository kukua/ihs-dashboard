<?php
/**
 * @author		Kukua <dev@kukua.cc>
 * @copyright	2016 Kukua B.V.
 * @license		MIT License
 */
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use App\Http\Requests;
use App\Libraries\Reporting;
use DateTime;

/**
 * @since		2016-07-14
 * @package		Http
 * @subpackage	Controller
 */
class DownloadController extends Controller
{
	/**
	 * Homepage
	 *
	 * @access public
	 * @return void
	 */
	public function index()
	{
		return view('download/index');
	}

	/**
	 * Process the download
	 *
	 * @access	public
	 * @param	Request	$request
	 * @return	void
	 */
	public function request(Request $request)
	{
		$startDate = DateTime::createFromFormat("d-m-Y H:i:s", $request->start . " 00:00:00");
		$endDate   = DateTime::createFromFormat("d-m-Y H:i:s", $request->end . " 23:59:59");

		$devices = [
			'c6afaa84170041ae',
			'e616a5cf292e41ae',
			'598deeda123941ae'
		];

		/* Get station info */
		$ids = implode(";", $devices);
		$response = (new Client())->request('GET', 'https://dashboard.kukua.cc/api/stations/find?ids=' . $ids);
		$stations = json_decode((string) $response->getBody());
		unset($response);

		/* Get sensordata */
		$report = [];
		$reporting = new Reporting($startDate->getTimestamp(), $endDate->getTimestamp());
		foreach($devices as $k => $device) {
			$report[$device]['temp'] = $reporting->getMaxTemp($device);
			$report[$device]['wind'] = $reporting->getMaxWindSpeed($device);
			$report[$device]['gust'] = $reporting->getMaxWindGustSpeed($device);
		}

		$this->_output($stations, $report);
	}

	/**
	 * Output data to a comma separated file
	 *
	 * @access	protected
	 * @param	array	$stations
	 * @param	array	$data
	 * @return	void
	 */
	protected function _output($stations, $data) {
		header('Content-Type: text/csv; charset=utf-8');
		header('Content-Disposition: attachment; filename=report.csv');

		$output = fopen('php://output', 'w');
		fputcsv($output, ['siteID', 'Longitude', 'Latitude', 'MT', 'Date MT', 'MWS', 'Date MWS', 'MWG', 'Date MWG']);
		foreach($stations as $station) {
			$station = (object) $station;
			if (isset($data[$station->deviceId])) {
				fputcsv($output, [
					$station->deviceId,
					$station->lat,
					$station->lng,
					$data[$station->deviceId]['temp']->temp,
					$data[$station->deviceId]['temp']->timestamp,
					$data[$station->deviceId]['wind']->windSpeed,
					$data[$station->deviceId]['wind']->timestamp,
					$data[$station->deviceId]['gust']->gustSpeed,
					$data[$station->deviceId]['gust']->timestamp,
				]);
			}
		}
		exit;
	}
}
