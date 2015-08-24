'use strict';

describe('Directive: lpGoalView', function () {

  // load the directive's module
  beforeEach(module('lifePlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lp-goal-view></lp-goal-view>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lpGoalView directive');
  }));
});
