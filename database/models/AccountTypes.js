var orm 					= require('orm');

module.exports 				= function(conn) {
	return conn.define('account_types', 
		{
			__id			:{ type: 'serial', key: true },
			_name			:{ type: 'text', unique: true, required: true }
		}, {
			validations		:{
				_name		:orm.enforce.unique('Account Type Name Already Taken!')
			}
		}
	);
};