'use strict';

require('angular');
require('angular-route');


var app = angular.module('popeApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: '/partials/partial1.html'
    });

    $routeProvider.when('/view2', {
      templateUrl: '/partials/partial2.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/view1'
    });
  }]);


app
  .controller('homeCtrl', [])
