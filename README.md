# Sensors app
Basic AngularJS app showing some of the framework functionalities. It shows several sensors updated in real time, and allows some parameter configuration. It also uses AngularJS native routing for navigating between views.

## Providers
#### Sensors

The `SensorsProvider` manages the list of available sensors and their properties, and it allows adding new sensors to the system.

In this example, the sensor values are generated randomly (between the min-max range) every 1000ms, but this value can be set in the `config` phase of the app. In a production environment, this values would be read from the sensor API, an external HTTP call...

Every sensor has this properties:

* `name` (String): Shows the sensor name.
* `values` (Array): Stores all the values read from the sensor.
* `min` (Integer): Defines the minimum value for generating the random sensor value.
* `max` (Integer): Defines the maximum value for generating the random sensor value.

## Filters
#### Last
Returns the last element in an array.
In this app, it allows us to read the current value of the sensor (the last one stored in the values array).

#### Minimum
Returns the smallest element in a number array.
In this app, it allows us to read the minimum value reached by the sensor through all its history.

#### Maximum
Returns the largest element in a number array.
In this app, it allows us to read the maximum value reached by the sensor through all its history.

## Directives
#### Sensor
Shows the name, current value and range of the sensor defined on `ngModel`.

## views
#### Home view
Shows the list of available sensors (default: 2). New sensors can be added by defining a name.
