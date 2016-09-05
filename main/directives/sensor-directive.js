'use strict';
angular.module('sensorsApp')
	.directive('sensor', function () {
		return {
			restrict: 'E',
			replace: 'true',
			require: 'ngModel',
			scope: {
				sensor: '=ngModel'
			},
			template: '<div class="sensor">' +
				'<h4 class="title">{{::sensor.name}}</h4>' +
				'<span class="current-value">{{sensor.values | last }}</span>' +
				'<span class="range">Range: {{::sensor.min}} / {{::sensor.max}}</span>' +
				'</div>'

		};
	});
