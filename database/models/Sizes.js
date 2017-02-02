var orm 					= require('orm');

module.exports 				= function(conn) {
	return conn.define('sizes', 
		{
			__id			:{ type: 'serial', key: true },
			_name			:{ type: 'text', size: 100, unique: true },
			_abbreviation	:{ type: 'text', size: 10, unique: true }
		}, {
			validations			:{
				_name			:orm.enforce.unique('Name Already Taken!'),
				_abbreviation	:orm.enforce.unique('Abbreviation Already Taken')
			}
		}
	);
};