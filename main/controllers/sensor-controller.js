'use strict';

angular.module('sensorsApp')
	.controller('SensorController', ['$routeParams', 'Sensors', function ($routeParams, Sensors) {
		var vm = this;
		vm.sensor = Sensors.getByIndex($routeParams.sensorId);

		vm.clearHistory = clearHistory;

		function clearHistory(sensor) {
			sensor.values = [];
		}
	}]);
