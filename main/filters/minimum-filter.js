'use strict';

angular.module('sensorsApp')
	.filter('minimum', function () {
		return function (array) {
			var result = '--';
			if (array.length) {
				var min = Number.MAX_SAFE_INTEGER;
				for (var i = 0; i < array.length; i++) {
					if (array[i] < min) {
						min = array[i];
					}
				}
				result = min;
			}
			return result;
		};
	});
