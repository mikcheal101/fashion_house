module.exports 			= function(router) {

	// update
	// delete
	router.route('/customer/profile')
		.post((req, res, next) => {
			
		})
		.delete((req, res, next) => {

		});

	// list payments -> get
	// make payment -> post
	router.route('/customer/payments/')
		.get((req, res, next) => {
			
		})
		.post((req, res, next) => {

		});

	// list cart items -> get
	// drop item from cart -> delete
	// update cart item count -> put
	// add item to cart
	router.route('/customer/cart')
		.get((req, res, next) => {
			
		})
		.post((req, res, next) => {
			
		})
		.delete((req, res, next) => {
			
		})
		.put((req, res, next) => {
			
		})
};