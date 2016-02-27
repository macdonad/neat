'use strict';

angular.module('MainApp.Home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$http', function($http) {
	var ctrl = this;

	//TODO Add to Table

	//TODO Remove From Table

	//TODO Sort Table

	//TODO Style Table

	$http.get('../app/data.json').success(function(response) {
	   ctrl.results = response.data;
	});
}]);