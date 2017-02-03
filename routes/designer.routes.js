module.exports				= function(router) {


	// updating of profile, -> put
	// deleting profile -> delete
	// creation of profile / registration -> post
	// listing profile -> get
	router.route('/designer/authentication/profile')
		.post((req, res, next) => {

		})
		.get((req, res, next) => {
			
		})
		.delete((req, res, next) => {
			
		})
		.put((req, res, next) => {
			
		});

	// updating products
	// listing products
	// creation of products
	// deleting of product
	router.route('/designer/product')
		.post((req, res, next) => {
			
		})
		.get((req, res, next) => {
			
		})
		.delete((req, res, next) => {
			
		})
		.put((req, res, next) => {
			
		});

	// updating fashion house
	// deleting fashion house
	// creating fashion house
	// listing fashion house
	router.route('/designer/fashion/house')
		.post((req, res, next) => {
			
		})
		.get((req, res, next) => {
			
		})
		.delete((req, res, next) => {
			
		})
		.put((req, res, next) => {
			
		});

	// updating accounting details
	// deleting accounting details
	// creating accounting details
	// listing accounting details
	router.route('/designer/account')
		.post((req, res, next) => {
			
		})
		.get((req, res, next) => {
			
		})
		.delete((req, res, next) => {
			
		})
		.put((req, res, next) => {
			
		});

	// updating fashion house designers
	// deleting fashion house designers
	// creating fashion house designers
	// listing fashion house designers
	router.route('/designer/fashion/house/designers')
		.post((req, res, next) => {
			
		})
		.get((req, res, next) => {
			
		})
		.delete((req, res, next) => {
			
		})
		.put((req, res, next) => {
			
		});

};