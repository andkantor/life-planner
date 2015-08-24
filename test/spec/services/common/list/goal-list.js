'use strict';

describe('Service: GoalList', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var GoalList;
  beforeEach(inject(function (_GoalList_) {
    GoalList = _GoalList_;
  }));

  it('should do something', function () {
    expect(!!GoalList).toBe(true);
  });

});
