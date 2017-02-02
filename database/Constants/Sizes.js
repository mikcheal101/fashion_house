module.exports					= function(models) {
	
	var RECORDS 				= [
		{
			__id				:1,
			_name				:'SMALL',
			_abbreviation		:'S'
		}, {
			__id				:2,
			_name				:'MEDIUM',
			_abbreviation		:'M'
		}, {
			__id				:3,
			_name				:'LARGE',
			_abbreviation		:'L'
		}, {
			__id				:4,
			_name				:'EXTRA_LARGE',
			_abbreviation		:'XL'
		}, {
			__id				:5,
			_name				:'EXTRA_EXTRA_LARGE',
			_abbreviation		:'XXL'
		}
	];

	models.Size.create(RECORDS, function(e, r){});

};