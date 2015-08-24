'use strict';

describe('Directive: lpGoalCreateButton', function () {

  // load the directive's module
  beforeEach(module('lifePlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lp-goal-create-button></lp-goal-create-button>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lpGoalCreateButton directive');
  }));
});
