var express			= require('express');
var orm 			= require('orm');
var connection 		= {
	host 			:'localhost',
	database 		:'fashion_house',
	user			:'root',
	password		:'mikkytrionze',
	protocol		:'mysql',
	port 			:'3306'
};

var Models 			= require('./models/Models');
var Relationships 	= require('./Relationships');
var Constants 		= require('./Constants');

orm.connect(connection, (err, db) => {
	if(!err) {
		var models 				= new Models(db);
		var relationships 		= new Relationships(models);
		
		db.sync(err 		=> {
			if(!err) {
				var constants 	= new Constants(models);
			} else throw err;
		});
	}
});


module.exports		= orm;