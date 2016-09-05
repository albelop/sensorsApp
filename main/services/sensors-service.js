angular.module('sensorsApp')
	.provider('Sensors', function SensorsProvider() {
		this.updateInterval = 1000;

		this.setInterval = function (val) {
			this.updateInterval = val;
		};

		this.$get = ['$interval', function ($interval) {
			var sensors = [{
				name: 'Machine A',
				values: [],
				min: 0,
				max: 100
			}, {
				name: 'Machine B',
				values: [],
				min: -5,
				max: 5
			}];

			$interval(updateValues, this.updateInterval);


			function get() {
				return sensors;
			}

			function getByIndex(index) {
				return sensors[index];
			}

			function add(name) {
				var newSensor = {
					name: name,
					values: [],
					min: 0,
					max: 100
				};
				sensors.push(newSensor);
				return newSensor;
			}

			function updateValues() {
				for (var i = 0; i < sensors.length; i++) {
					var range = sensors[i].max - sensors[i].min;
					sensors[i].values.push(Math.floor((Math.random() * range + 1)) + sensors[i].min);
				}
			}

			return {
				get: get,
				getByIndex: getByIndex,
				add: add
			};
		}]
	});
