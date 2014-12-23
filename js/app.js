var HabitDesktop = angular.module('HabitDesktop', [
  'ui.router',
  'HabitDesktopControllers',
  'HabitDesktopResources'
]);

HabitDesktop.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tasks', {
      url: "/tasks",
      templateUrl: "partials/tasks.html"
    });

  $urlRouterProvider.otherwise("/tasks");
});
