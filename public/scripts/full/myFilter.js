'use strict';

/*	------------------------------------
	myFilter.js
	------------------------------------ */

/* global myAppFilters */

myAppFilters.filter('myFilter', function() {
	return function(input) {
		return input;
	};
});