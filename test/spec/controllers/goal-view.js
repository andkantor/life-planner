'use strict';

describe('Controller: GoalViewCtrl', function () {

  // load the controller's module
  beforeEach(module('lifePlannerApp'));

  var GoalViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoalViewCtrl = $controller('GoalViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GoalViewCtrl.awesomeThings.length).toBe(3);
  });
});
