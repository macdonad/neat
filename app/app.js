var MainApp = angular.module('MainApp', ['ngRoute']);

MainApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl : 'views/home/home.html',
			controller : 'MainController'
		});
});

MainApp.controller('MainController', function($scope){
	var ctrl = $scope;

	ctrl.message = 'Test';
});