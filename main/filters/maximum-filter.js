'use strict';

angular.module('sensorsApp')
	.filter('maximum', function () {
		return function (array) {
			var result = '--';
			if (array.length) {
				var max = Number.MIN_SAFE_INTEGER;
				for (var i = 0; i < array.length; i++) {
					if (array[i] > max) {
						max = array[i];
					}
				}
				result = max;
			}
			return result;
		};
	});
