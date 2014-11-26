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
		var headerView = {};
		headerView.restrict = 'AE';
		headerView.templateUrl = viewDirectory + 'site-footer.html';
		return headerView;
	});



	/* --------------------
	// Controllers
	-------------------- */

	/* CustomersController */
	app.controller('CustomersController', function($scope){
		$scope.customers = customerData; // Referal to /api/data.js
	});

}());

