'use strict';

// Declare app level module which depends on views, and components
angular.module('ngTeashop', [
  'ngRoute',
  'ngTeashop.home'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/',{
      redirectTo: '/home'
  })
      .otherwise({redirectTo: '/home'});
}]);
