module.exports 				= function(conn) {
	return conn.define('addresses', 
		{
			__id			:{ type: 'serial', key: true },
			__created_at	:{ type: 'date' },
			__updated_at	:{ type: 'date' },

			_state			:{ type: 'integer', required: true },
			
			location		:{ type: 'text', big: true }
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