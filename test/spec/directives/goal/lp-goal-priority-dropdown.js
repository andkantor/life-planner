'use strict';

describe('Directive: lpGoalPriorityDropdown', function () {

  // load the directive's module
  beforeEach(module('lifePlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lp-goal-priority-dropdown></lp-goal-priority-dropdown>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lpGoalPriorityDropdown directive');
  }));
});
