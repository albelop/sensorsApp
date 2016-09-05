'use strict';
angular.module('sensorsApp',
	[
		'ngRoute'
	])
	.config(['$routeProvider', 'SensorsProvider', function ($routeProvider, SensorsProvider) {
		SensorsProvider.setInterval(1000);

		$routeProvider
			.when('/', {
				templateUrl: 'main/views/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			})
			.when('/sensors/:sensorId', {
				templateUrl: 'main/views/sensor.html',
				controller: 'SensorController',
				controllerAs: 'vm'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
