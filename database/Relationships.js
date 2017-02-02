module.exports 			= function(models) {

	models.User.hasOne('type', models.Usertype, { field: '_type' });
	models.User.hasOne('sex', models.Sex, { field: '_sex' });
	models.User.hasOne('address', models.Address, { field: '_address' });

	models.Account.hasOne('account_type', models.AccountType, { field: '_account_type' });
	models.Account.hasOne('designer', models.Designer, { field: '_owner' });

	models.Address.hasOne('state', models.State, { field: '_state' });

	models.State.hasMany('addresses', models.Address);

	models.Bank.hasMany('addresses', models.Address);

	models.Blog.hasOne('blogger', models.User, { field: '_poster' });

	models.Designer.hasMany('accounts', models.Account);
	models.Designer.hasOne('user', models.User, { field: '_user' });
	models.Designer.hasOne('fashion_house', models.FashionHouse, { field: '_fashion_house' });

	models.FashionHouse.hasMany('designers', models.Designer);
	models.FashionHouse.hasMany('products', models.Product);
	models.FashionHouse.hasOne('address', models.Address, { field: '_address' });

	models.Product.hasMany('categories', models.ProductCategory);
	models.Product.hasMany('sizes', models.Size);
	models.Product.hasOne('fashion_house', models.FashionHouse, { field: '_fashion_house' });
	models.Product.hasOne('sex', models.Sex, { field: '_sex' });
	models.Product.hasOne('size', models.Size, { field: '_size' });

	models.ProductCategory.hasMany('products', models.Product);

	models.Sex.hasMany('products', models.Product);
	models.Sex.hasMany('users', models.User);

	models.Size.hasMany('products', models.Product);
};