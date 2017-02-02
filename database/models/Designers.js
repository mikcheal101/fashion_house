var orm 					= require('orm');

module.exports 				= function(conn) {
	return conn.define('designers', 
		{
			__id			:{ type: 'serial', key: true },
			
			_user			:{ type: 'integer', unique: true, required: true },
			_fashion_house	:{ type: 'integer', required: true },
			_is_admin		:{ type: 'boolean', required: true, defaultValue:false }
		}, {
			validations		:{
				_email		:orm.enforce.unique('A Designer already had this user Id!')
			}
		}
	);
};