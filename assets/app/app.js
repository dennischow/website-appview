(function(){

	/* --------------------
	// App
	-------------------- */
	console.log('This is an App');
	var app = angular.module('customersApp', []);

	var viewDirectory = 'assets/app/views/';

	/* --------------------
	// Static HTML Template Include
	-------------------- */

	/* Import Site-Header View */
	app.directive('siteHeader', function() {
		var headerView = {};
		headerView.restrict = 'AE';
		headerView.templateUrl = viewDirectory + 'site-header.html';
		return headerView;
	});

	/* Import Site-Header View */
	app.directive('siteFooter', function() {
		var footerView = {};
		footerView.restrict = 'AE';
		footerView.templateUrl = viewDirectory + 'site-footer.html';
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

