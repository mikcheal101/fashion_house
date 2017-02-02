module.exports 				= function(conn) {
	return conn.define('fashion_houses', 
		{
			__id			:{ type: 'serial', key: true },
			__created_at 	:{ type: 'date' },
			__updated_at	:{ type: 'date' },

			_logo			:{ type: 'text', size: 200, },
			_motto			:{ type: 'text', size: 200, defaultValue: '' },
			_address		:{ type: 'integer', unique: true, required: true },
			_email			:{ type: 'text', size: 200, unique: true }
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
		}
	);
};