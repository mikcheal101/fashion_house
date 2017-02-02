var orm 					= require('orm');

module.exports 				= function(conn) {
	return conn.define('product_categories', 
		{
			__id			:{ type: 'serial', key: true },
			__created_at	:{ type: 'date' },
			__updated_at	:{ type: 'date' },

			_name			:{ type: 'text', unqiue: true, size: 200, required: true }
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
				_name		:orm.enforce.unique('A Category with this name has already been taken!')
			}
		}
	);
};