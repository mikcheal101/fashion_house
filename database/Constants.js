module.exports					= function(models) {
	var States					= require('./Constants/States')(models);
	var Addresses				= require('./Constants/Addresses')(models);
	var Usertypes				= require('./Constants/Usertypes')(models);
	var AccountTypes 			= require('./Constants/AccountTypes')(models);
	var Sexes 					= require('./Constants/Sexes')(models);
	var Sizes					= require('./Constants/Sizes')(models);
	var Users 					= require('./Constants/Users')(models);
};