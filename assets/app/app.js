(function(){

	/* --------------------
	// App
	-------------------- */
	console.log('This is an App');
	var app = angular.module('customersApp', []);

	var templatesDirectory = 'assets/app/templates/';

	/* --------------------
	// Static HTML Template Include
	-------------------- */

	/* Import Site-Header View */
	app.directive('siteHeader', function() {
		var headerView = {};
		headerView.restrict = 'AE';
		headerView.templateUrl = templatesDirectory + 'site-header.html';
		return headerView;
	});

	/* Import Site-Header View */
	app.directive('siteFooter', function() {
		var footerView = {};
		footerView.restrict = 'AE';
		footerView.templateUrl = templatesDirectory + 'site-footer.html';
		return footerView;
	});



	/* --------------------
	// Controllers
	-------------------- */

	/* CustomersController */
	app.controller('CustomersController', function($scope){
		$scope.customers = customerData; // Referal to /api/data.js


		$scope.qtyUpdate = function(customer,increase){

			if( increase == true ){
				var newOdrder = {id:32};

				var newOrder = {
									id : 4, 
									joined : '2007-12-02', 
									name : 'Bitch', 
									age : '11', 
									city : 'Thailand', 
									orderTotal : '4.329023',
									orders : [
										{
											id : 4, 
											product : 'shoes', 
											total : 9.0654
										}
									]
								}


				customer.orders.push( newOdrder );
			}else 
			if( increase == false ){
				customer.orders.splice(0,1);
			}else{
				return false;
			}
		}

	});

}());

