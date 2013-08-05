define(
  ['controllers/controllers', 'services/userService'],
  function (controllers)
  {
    'use strict';

    /**
     * Partial1 controller
     */
    controllers.controller ('partial1Ctrl',
      ['$scope', 'UserService',
        function ($scope, UserService)
        {
          $scope.name = UserService.getUser();

          console.log('this is controller one');
        }]
    );
  }
);