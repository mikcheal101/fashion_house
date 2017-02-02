module.exports 				= function(conn) {
	return conn.define('products', 
		{
			__id			:{ type: 'serial', key: true },
			__created_at	:{ type: 'date' },
			__updated_at	:{ type: 'date' },

			_name			:{ type: 'text', size: 200 },
			_category		:{ type: 'integer', required: true },
			_sex			:{ type: 'integer', required: true },
			_fashion_house	:{ type: 'integer', required: true },

			price 			:{ type: 'number', required:true },
			color			:{ type: 'text', size: 100 }
		}
	);
};