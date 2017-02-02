var express = require('express');
var api 	= express.Router();

/* GET home page. */
api.get('/', (req, res, next) => {
	var msg 	= { message: "yeah men!" };
	res.json(msg);
});

api.get('/json', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

module.exports = api;
