'use strict';

describe('Controller: ActivityListCtrl', function () {

  // load the controller's module
  beforeEach(module('lifePlannerApp'));

  var ActivityListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActivityListCtrl = $controller('ActivityListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActivityListCtrl.awesomeThings.length).toBe(3);
  });
});
