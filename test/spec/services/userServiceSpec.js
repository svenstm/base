/**
 * This is test/spec/services/userServiceSpec.js
 */
define(
  ['angularMocks', 'services/services', 'services/userService'],
  function()
  {
    describe('UserService Service', function ()
    {
      beforeEach(module('services'));

      // These will be initialized before each spec (each it(), that is),
      // and reused
      var userService;

      beforeEach(inject(function (UserService)
      {
        userService = UserService;
      }));

      it('should have user', function()
      {
        expect(userService.getUser()).toEqual('testUser1');
      });

      it('should not equal to user', function()
      {
        expect(userService.getUser() + '-test').not.toEqual('testUser2-test');
      });

      it('should be equal to changed user', function()
      {
        expect(userService.getUser() + '-test').toEqual('testUser1-test');
      });

    });
  }
);