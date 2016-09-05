'use strict';

angular.module('sensorsApp')
	.controller('HomeController', ['Sensors', function (Sensors) {
		var vm = this;
		vm.newSensorName = '';
		vm.sensors = Sensors.get();
		vm.addSensor = addSensor;

		function addSensor(name) {
			vm.newSensorName = '';
			Sensors.add(name);
		}
	}]);
