define(
  ['controllers/controllers'],
  function (controllers)
  {
    'use strict';

    /**
     * Partial2 controller
     */
    controllers.controller ('partial2Ctrl',
      ['$scope',
        function ($scope)
        {
          console.log('controller 2 is inited', $scope);
        }]
    );
  }
);