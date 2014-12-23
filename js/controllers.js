var controllers = angular.module('HabitDesktopControllers', []);

controllers.controller('AppCtrl', function($scope, $rootScope, $window, User) {
  if($window.loggedIn) {
    User.get({}, function(user) {
      $rootScope.user = user;
      $scope.ready = true;
    });
  }
});
