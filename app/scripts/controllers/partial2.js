define(
  ['controllers/controllers'],
  function (controllers)
  {
    /**
     * Partial2 controller
     */
    controllers.controller ('partial2Ctrl',
      ['$scope',
        function ($scope)
        {
          console.log('controller 2 is inited');
        }]
    );
  }
);