module.exports 			= function(models) {
	var RECORDS			= [
		{
			__id		:1,
			
			_state		:37,
			location	:'Suncity Estate'
		}
	];

	models.Address.create(RECORDS, function(e, r) {});
};