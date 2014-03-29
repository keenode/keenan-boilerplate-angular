'use strict';

/*	------------------------------------
	app.js
	------------------------------------ */

/* global angular */

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
	'ngRoute',
	'ngAnimate',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	});
	$routeProvider.when('/about', {
		templateUrl: 'partials/about.html',
		controller: 'AboutCtrl'
	});
	$routeProvider.otherwise({ redirectTo: '/' });
}]);

var myAppFilters = angular.module('myApp.filters', []);
var myAppServices = angular.module('myApp.services', []);
var myAppDirectives = angular.module('myApp.directives', []);
var myAppControllers = angular.module('myApp.controllers', []);