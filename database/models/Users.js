var orm 				= require('orm');

module.exports 			= function(connection) {
	return connection.define('users', 
		{
			__id			:{ type: 'serial', key: true },
			__created_at	:{ type: 'date' },
			__updated_at	:{ type: 'date' },

			_username		:{ type: 'text', size: 100, unique: true, required: true },
			_pwd 			:{ type: 'text', size: 200, required: true },
			_tel			:{ type: 'text', size: 15, unique: true, required: true },
			_email			:{ type: 'text', size: 100, unique: true, required: true },
			_image			:{ type: 'text', size: 240, unique: true },

			_type			:{ type: 'integer', required: true },
			_sex			:{ type: 'integer', required: true },
			_address		:{ type: 'integer', required: false },
			
			firstname		:{ type: 'text', size: 50, required: true },
			middlename		:{ type: 'text', size: 50 },
			lastname		:{ type: 'text', size: 50, required: true }
		}, {
			validations		:{
				_email		:orm.enforce.unique('Email Aleady Taken!'),
				_tel		:orm.enforce.unique('Mobile Number Taken!')
			}
		}
	);
};