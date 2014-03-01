'use strict';

/*	------------------------------------
	myService.js
	------------------------------------ */

/* global myAppServices */
/* global console */

myAppServices.factory('myService', function() {
	return {
		sayHello: function() {
			console.log('Hello!');
		}
	};
});