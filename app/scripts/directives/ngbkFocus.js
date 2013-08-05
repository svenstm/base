define(
  ['directives/directives'],
  function (directives)
  {
    'use strict';

    directives.directive('ngbkFocus',
      ['$rootScope', function ($rootScope)
      {
        console.log('rootScope ->', $rootScope);

        return {
          restrict: 'A',
          scope:    true,
          link: function (scope, element, attrs)
          {
            if (attrs)
            {
              console.log('attr ->', attrs);
            }

            element[0].focus();
          }
        };
      }]
    );
  }
);
