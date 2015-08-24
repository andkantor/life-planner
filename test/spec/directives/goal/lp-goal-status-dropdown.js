'use strict';

describe('Directive: lpGoalStatusDropdown', function () {

  // load the directive's module
  beforeEach(module('lifePlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lp-goal-status-drop-down></lp-goal-status-drop-down>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lpGoalStatusDropDown directive');
  }));
});
