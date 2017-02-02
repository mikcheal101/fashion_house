module.exports					= function(models) {
	
	var RECORDS					= [
		{
			__id					:1,
			_name					:'SUPER_ADMINISTRATOR',
			_abbreviation			:'S_ADMIN'
		}, {
			__id					:2,
			_name					:'WEB_ADMINISTRATOR',
			_abbreviation			:'ADMIN'
		}, {
			__id					:3,
			_name					:'BLOGGER',
			_abbreviation			:'B'
		}, {
			__id					:4,
			_name					:'DESIGNER',
			_abbreviation			:'D'
		}, {
			__id					:5,
			_name					:'CUSTOMER',
			_abbreviation			:'CUS'
		}
	];

	models.Usertype.create(RECORDS, function(e, r){});
};