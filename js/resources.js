var HabitDesktopResources = angular.module('HabitDesktopResources', ['ngResource']);

var API_ROOT = 'https://habitrpg.com/api/v2';

HabitDesktopResources.factory('User', function($resource, $http, $window) {
  $http.defaults.headers.common['x-api-user'] = $window.config.user['user-id'];
  $http.defaults.headers.common['x-api-key'] = $window.config.user['api-token'];
  var general = $resource(API_ROOT + '/user');
  return general;
});
