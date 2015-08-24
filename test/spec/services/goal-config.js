'use strict';

describe('Service: GoalConfig', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var GoalConfig;
  beforeEach(inject(function (_GoalConfig_) {
    GoalConfig = _GoalConfig_;
  }));

  it('should do something', function () {
    expect(!!GoalConfig).toBe(true);
  });

});
