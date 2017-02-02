module.exports 				= function(db) {

	this.AccountType 		= require('./AccountTypes')(db);
	this.Account 			= require('./Accounts')(db);
	this.Address 			= require('./Addresses')(db);
	this.Bank 				= require('./Banks')(db);
	this.Blog 				= require('./Blogs')(db);
	this.Designer 			= require('./Designers')(db);
	this.FashionHouse		= require('./FashionHouses')(db);
	this.ProductCategory	= require('./ProductCategories')(db);
	this.Product 			= require('./Products')(db);
	this.Sex 				= require('./Sexes')(db);
	this.Size 				= require('./Sizes')(db);
	this.State 				= require('./States')(db);
	this.User 				= require('./Users')(db);
	this.Usertype			= require('./Usertypes')(db);
};
