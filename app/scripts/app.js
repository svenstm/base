'use strict';

angular.module('baseApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/partial1', {
        templateUrl: 'views/partial1.html',
        controller: 'MainCtrl'
      })
      .when('/partial2', {
        templateUrl: 'views/partial2.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
