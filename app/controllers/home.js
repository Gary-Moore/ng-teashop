angular.module('ngTeashop.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'templates/pages/home/index.html',
        controller: 'HomeCtrl'
    });
}])
.controller('HomeCtrl', ['$scope', function($scope){
    
}]);