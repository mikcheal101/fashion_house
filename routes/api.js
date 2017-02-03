var express = require('express');
var api 	= express.Router();

/* GET home page. */
api.get('/', (req, res, next) => {
	var msg 	= { message: "yeah men!" };
	res.json(msg);
});


api.get('/api/fashion/house', (req, res, next) => {
	// TODO: list all the fashion houses, with their products, designers
});

api.get('/api/designer/', (req, res, next) => {
	// TODO: list all designer, with their fashion houses, products
});


api.post('/api/authentication/sign/on', (req, res, next) => {
	// TODO: sign on to the system 
});

api.post('/api/authentication/register', (req, res, next) => {
	// TODO: sign up 
});

api.post('/api/authentication/forgot/password', (req, res, next) => {
	// TODO: create new tmp password for user
});

api.post('/api/authentication/sign/off', (req, res, next) => {
	// TODO: sign off from portal
});


	

module.exports = api;
