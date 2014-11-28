(function(){

	/* --------------------
	// App
	-------------------- */
	console.log('This is an App');
	var app = angular.module('customersApp', ['ngRoute']);

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
	// Route Provider - Change App Views
	-------------------- */
	// Config Routing
	app.config(function($routeProvider) {

		$routeProvider
			.when('/', {
				controller : 'CustomersController',
				templateUrl : templatesDirectory + '_templates-customers-list.html',
				resolve : {
					done : function(){
						console.log('$routeProvider customers rans');
					}
				}
			})
			.when('/customer-orders/:customerID', {
				controller : 'CustomerOrdersController',
				templateUrl : templatesDirectory + '_templates-orders-list.html',
				resolve : {
					done : function(){
						console.log('$routeProvider orders rans');
					}
				}
			})
			.otherwise({ redirectTo: '/' });

	});



	/* --------------------
	// Service
	-------------------- */

	/* Factory */
	app.factory('customersFactory', function(){

		var customers = customerData; // Referal to /api/data.js
		var factory = {};

		factory.getCustomers = function(){
			return customers;
		};

		return factory;

	});



	/* --------------------
	// Controllers
	-------------------- */

	/* CustomersController */
	app.controller('CustomersController', function($scope, customersFactory){

		$scope.customers = [];

		// Collection Customers Data tho Factory 'customersFactory'
		var init = function(){
			$scope.customers = customersFactory.getCustomers();
		}
		init();


		$scope.qtyUpdate = function(customer,increase){

			if( increase == true ){
				var newOrder = {
						id : 4, 
						product : 'shoes', 
						total : 9.0654
					}

				customer.orders.push( newOrder );
			}else 
			if( increase == false ){
				customer.orders.splice(0,1);
			}else{
				return false;
			}
		}

	});

	/* Orders */
	app.controller('CustomerOrdersController', function($scope, customersFactory, $routeParams){

		var customerID = $routeParams.customerID; // customerID is come from the url 

		$scope.customer = null;
		$scope.orders = null;

		$scope.customers = [];

		// Collection Customers Data tho Factory 'customersFactory'
		var init = function(){
			$scope.customers = customersFactory.getCustomers();
		}
		init();

		function ordersAssign(){
			for(var i=0, len=$scope.customers.length; i<len; i++){
				if( $scope.customers[i].id === parseInt( customerID ) ){
					// console.log( $scope.customers[i].id );
					$scope.customer = $scope.customers[i];
					$scope.orders = $scope.customers[i].orders;
					break;
				}
				// console.log( $scope.customers.length );
				// console.log( parseInt( customerID ) );
			}
			console.log(' ordersAssign Done ');
		}

		// Execute Order Assignation
		ordersAssign();

	});


}());

