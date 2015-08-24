'use strict';

describe('Directive: lpActivityTable', function () {

  // load the directive's module
  beforeEach(module('lifePlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lp-activity-table></lp-activity-table>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lpActivityTable directive');
  }));
});
