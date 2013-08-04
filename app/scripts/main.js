// the app/scripts/main.js file, which defines our RequireJS config

require.config (
  {
    paths: {
      angular:  '../vendors/angular/angular.min',
      jquery:   '../vendors/jquery/jquery.min',
      domReady: '../vendors/requirejs-domready/domReady'
    },
    shim: {
      angular: {
        deps:     ['jquery'],
        exports:  'angular'
      }
    }
  }
);


require (
  [
    'angular',
    'app',
    'domReady',
    'services/userService',
    'controllers/partial1',
    'controllers/partial2',
    'directives/ngbkFocus'
    // Any individual controller, service, directive or filter file
    // that you add will need to be pulled in here.
  ],
  function (angular, app, domReady)
  {
    'use strict';

    /**
     * ROUTES
     */
    app.config(
      [ '$routeProvider',
        function ($routeProvider)
        {
          $routeProvider
            .when('/partial1',
            {
              templateUrl:  'views/partial1.html',
              controller:   'partial1Ctrl'
            })
            .when('/partial2',
            {
              templateUrl:  'views/partial2.html',
              controller:   'partial2Ctrl'
            })
            .otherwise({
              templateUrl:  '404.html'
            })
        }
      ]
    );

    /**
     * DOM READY
     */
    domReady(function ()
      {
        angular.bootstrap(document, ['MyApp']);

        // The following is required if you want AngularJS Scenario tests to work
        $('html').addClass('ng-app: MyApp');
      }
    );

  }
);