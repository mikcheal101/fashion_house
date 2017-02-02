module.exports					= function(models) {

	var RECORDS 				= {
		__id					:1,
		__created_at			:new Date(),
		__updated_at			:new Date(),

		_tel 					:'09020464737',
		_email					:'superadministrator@mail.com',
		_image					:'',
		_type					:1,
		_sex					:1,
		_username				:'superadministrator',
		_pwd					:'c54c27dd2503a9d9aebe8d6542425aad8313c1b55dc3b5b43ffb6c49562c6f34',

		firstname				:'Hirekaan',
		middlename				:'Micheal',
		lastname				:'Hemen',
		_address				:1,
	};

	models.User.create(RECORDS, function(e, r){
		if(e.code !== 'ER_DUP_ENTRY')
			console.log('Users error: ', e.code);
	});
};