<?php
/**
 * @author		Kukua <dev@kukua.cc>
 * @copyright	2016 Kukua B.V.
 * @license		MIT License
 */
namespace App\Libraries;

use DB;

/**
 * @since		2016-07-14
 * @package		Library
 */
class Reporting
{
	protected $_table;
	protected $_start;
	protected $_end;

	/**
	 * @param	int		$start
	 * @param	int		$end
	 */
	public function __construct($start, $end) {
		$this->_start	= $start;
		$this->_end		= $end;
	}

	/**
	 * @access	public
	 * @param	string	$table
	 * @return	array
	 */
	public function getMaxTemp($table)
	{
		$this->_table = $table;
		$result = $this->_query('temp');
		return $result;
	}

	/**
	 * @access	public
	 * @param	string $table
	 * @return	array
	 */
	public function getMaxWindSpeed($table)
	{
		$this->_table = $table;
		$result = $this->_query('windSpeed');
		return $result;
	}

	/**
	 * @access	public
	 * @param	string $table
	 * @return	array
	 */
	public function getMaxWindGustSpeed($table)
	{
		$this->_table = $table;
		$result = $this->_query('gustSpeed');
		return $result;
	}

	/**
	 * Query measurments DB
	 *
	 * @access	private
	 * @param	string	column
	 * @return	StdClass
	 */
	private function _query($column) {
		$db = DB::connection('measurements')
			->table($this->_table)
			->select('timestamp', $column)
			->whereBetween(DB::raw('UNIX_TIMESTAMP(timestamp)'), [$this->_start, $this->_end])
			->orderBy($column, 'DESC')
			->limit(1);

		return $db->first();
	}
}
