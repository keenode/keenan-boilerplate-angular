'use strict';

/*	------------------------------------
	appHeader.js
	------------------------------------ */

/* global myAppDirectives */

myAppDirectives.directive('appHeader', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/appHeader.html',
		link: function(scope, element) {
			scope.title = 'Header directive';
		}
	};
});