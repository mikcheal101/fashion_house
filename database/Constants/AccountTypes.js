module.exports					= function(models) {
	
	var RECORDS					= [
		{
			__id					:1,
			_name					:'BANK_ACOUNT',
		}, {
			__id					:2,
			_name					:'CREDIT_CARD',
		}
	];

	models.AccountType.create(RECORDS, function(e, r){});
};