console.log('This is an App');

var app = angular.module('customersApp', []);

app.controller('CustomersController', function($scope){

	$scope.customers = customerData; // Referal to /api/data.js

});

