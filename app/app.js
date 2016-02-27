'use strict';

var MainApp = angular.module('MainApp', [
	'ngRoute',
	'MainApp.Home'
	]).
	config(['$routeProvider', function($routeProvider) {
  		$routeProvider.otherwise({redirectTo: '/'});
	}]);