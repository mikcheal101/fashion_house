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

api
	.route('/api/account/types')
		.get((req, res) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).jsonp({ text: 'get sent' });
		})
		.post((req, res) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({ text: 'post sent' });
		})
		.put((req, res) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({ text: 'put sent' });
		})
		.delete((req, res) => {
			res.setHeader('Content-Type', 'application/json');
			res.status(200).json({ text: 'delete sent' });
		})


module.exports = api;
