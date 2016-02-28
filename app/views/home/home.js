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
	ctrl.results = [];
	ctrl.sortType = 'firstName';
	ctrl.sortReverse = false;

	//Add to Table
	ctrl.add = function(){
		var item = {firstName: ctrl.first,
					lastName: ctrl.last}
		ctrl.results.push(item);
	};

	//Remove From Table
	ctrl.remove = function(index){
		ctrl.results.splice(index, 1);
	};

	//TODO Style Table


	$http.get('../app/data.json').success(function(response) {
	   ctrl.results = response.data;
	});
}]);