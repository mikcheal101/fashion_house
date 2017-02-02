var orm 					= require('orm');

module.exports 				= function(conn) {
	return conn.define('banks', 
		{
			__id			:{ type: 'serial', key: true },
			__created_at	:{ type: 'date' },
			__updated_at	:{ type: 'date' },

			_name			:{ type: 'text', size: 200, unique: true, required: true }
		}, {
			hooks			:{
				beforeCreate:function() {
					var _this 	= this;
					if(_this.__created_at === null)
						_this.__created_at = new Date();
					if(_this.__updated_at === null)
						_this.__updated_at = new Date();
				}
			}
		}, {
			validations		:{
				_name		:orm.enforce.unique('A bank With this name already exists!')
			}
		}
	);
};