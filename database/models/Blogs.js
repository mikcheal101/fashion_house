module.exports 				= function(conn) {
	return conn.define('blogs', 
		{
			__id			:{ type: 'serial', key: true },
			__created_at	:{ type: 'date' },
			__updated_at	:{ type: 'date' },

			_post			:{ type: 'text', size: 300, big: true },
			_poster			:{ type: 'integer', key: true}
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