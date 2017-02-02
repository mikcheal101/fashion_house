module.exports					= function(models) {
	
	var RECORDS					= [
		{
			__id					:1,
			_name					:'MALE',
			_abbreviation			:'M'
		}, {
			__id					:2,
			_name					:'FEMALE',
			_abbreviation			:'F'
		}, {
			__id					:3,
			_name					:'UNISEX',
			_abbreviation			:'U'
		}
	];


	models.Sex.create(RECORDS, function(e, r){});
};