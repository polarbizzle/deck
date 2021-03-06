'use strict';

const angular = require('angular');

module.exports = angular.module('spinnaker.serverGroup.configure.titus', [
  require('./wizard/deployInitializer.controller.js'),
  require('./serverGroupConfiguration.service.js'),
  require('./wizard/ServerGroupBasicSettings.controller.js'),
  require('./wizard/ServerGroupResources.controller.js'),
  require('./wizard/ServerGroupCapacity.controller.js'),
  require('./wizard/ServerGroupParameters.controller.js'),
  require('./serverGroupBasicSettingsSelector.directive.js'),
  require('./serverGroupCapacitySelector.directive.js'),
]);
