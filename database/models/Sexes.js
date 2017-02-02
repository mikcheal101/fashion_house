var orm 						= require('orm');

module.exports 					= function(conn) {
	return conn.define('sexes', 
		{
			__id				:{ type: 'serial', key: true },
			_name				:{ type: 'text', unique: true, required: true },
			_abbreviation		:{ type: 'text', unique: true, required: true }
		}, {
			validations			:{
				_name			:orm.enforce.unique('Name Already Taken!'),
				_abbreviation	:orm.enforce.unique('Abbreviation Already Taken')
			}
		}
	);

};