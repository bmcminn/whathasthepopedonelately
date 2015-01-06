require('angular');
require('angular-route');

angular.module('popeApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'partials/parital1.html'
    });

    $routeProvider.when('/view2', {
      templateUrl: 'partials/parital2.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/view1'
    });
  }]);
