'use strict';

describe('Directive: lpAddActivityButton', function () {

  // load the directive's module
  beforeEach(module('lifePlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lp-add-activity-button></lp-add-activity-button>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lpAddActivityButton directive');
  }));
});
