(function(){

	/* --------------------
	// App
	-------------------- */
	console.time('Track');
	console.log('This is an App');
	var app = angular.module('customersApp', ['ngRoute']);

	var templatesDirectory = 'assets/app/templates/';
	var apiDirectory = 'assets/api/';



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
	// Global Scope for this App
	-------------------- */
	// Root Scope - Sharing this function all within this app
	app.run(function($rootScope) {

		// Back History - ng-click="backHistory()" - Reference : http://stackoverflow.com/questions/15025979/can-i-make-a-function-available-in-every-controller-in-angular
		$rootScope.backHistory = function(){
			window.history.back();
		}

	});



	/* --------------------
	// Service
	-------------------- */

	/* Factory */
	app.factory('customersFactory', function($http){

		var customers = customerData; // Referal to /api/data.js
		var factory = {};

		// JS Data
		factory.getCustomers = function(){
			return customers;
		};

		// JSON Data
		// factory.getCustomers = function(){
		// 	return $http.get( apiDirectory + "customersData.json" )
		// 			.success(function(data, status, headers, config){
		// 				console.log( 'HTTP Status : Success ' + status );
		// 			})
		// 			.error(function(data, status, headers, config){
		// 				console.warn( 'HTTP Status : Error' );
		// 			});
		// };

		return factory;

	});


	/* --------------------
	// Controllers
	-------------------- */

	/* CustomersController */
	app.controller('CustomersController', function($scope, $http, customersFactory){

		$scope.customers = [];

		// Collection Customers Data tho Factory 'customersFactory' JS
		var init = function(){
			$scope.customers = customersFactory.getCustomers();
		}
		init();

		// Collection Customers Data tho Factory 'customersFactory' JSON
		// var init = function(){

		// 	// Execute Factory
		// 	customersFactory.getCustomers()
		// 	.then(function(response){
		// 		// console.log( response );
		// 		$scope.customers = response.data;
		// 		console.timeEnd('Track');
		// 	});

		// }
		// init();

		$scope.updateDropNote = function(customerID, note){
			
			angular.forEach($scope.customers, function(value) {
			  // this.push(key + ': ' + value);
			  if( value.id == customerID ){

			  		console.log( value.id + ' ' + customerID );
			  		console.log( note );
			  		// value.dropNote = note;
			  		// console.log( value.dropNote );
			  		// return false;
			  }

			});

			// $scope.customers.length );
		}

		$scope.qtyUpdate = function(customer,increase){

			if( increase == true ){
				var newOrder = {
						id : 4, 
						product : 'shoes', 
						total : 27.34
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
	app.controller('CustomerOrdersController', function($scope, $http, customersFactory, $routeParams){

		var customerID = $routeParams.customerID; // customerID is come from the url 

		$scope.customer = null;
		$scope.orders = null;
		$scope.customers = [];

		// Back History - this function to moved to rootscope 
		// $scope.backHistory = function(){ 
		// 	window.history.back();
		// };

		// Sum Total of Orders Total - Reference : http://jsfiddle.net/slav123/75m7e/3/
		$scope.total = function(){
			var total = 0;
			angular.forEach($scope.orders, function(item) {
				total += item.total;
			})

			console.log( 'Sum Total : ' + total );
			return total;
		}

		// Collection Customers Data tho Factory 'customersFactory' JS
		var init = function(){
			$scope.customers = customersFactory.getCustomers();
		}
		init();

		// Collection Customers Data tho Factory 'customersFactory' JSON
		// var init = function(){

		// 	// Execute Factory
		// 	customersFactory.getCustomers()
		// 	.then(function(response){
		// 		console.log( response );
		// 		$scope.customers = response.data;
		// 	});

		// }
		// init();

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
			console.log( 'ordersAssign Done' );
		}

		// Execute Order Assignation
		ordersAssign();

	});


}());

