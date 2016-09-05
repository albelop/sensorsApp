'use strict';

angular.module('sensorsApp')
	.filter('last', function () {
		return function (array) {
			return array.length ? array[array.length - 1] : '--';
		};
	});
