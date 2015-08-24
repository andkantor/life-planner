'use strict';

describe('Service: GoalPersistenceDecorator', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var GoalPersistenceDecorator;
  beforeEach(inject(function (_GoalPersistenceDecorator_) {
    GoalPersistenceDecorator = _GoalPersistenceDecorator_;
  }));

  it('should do something', function () {
    expect(!!GoalPersistenceDecorator).toBe(true);
  });

});
