'use strict';

describe('Service: Scheduler', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var Scheduler;
  beforeEach(inject(function (_Scheduler_) {
    Scheduler = _Scheduler_;
  }));

  it('should do something', function () {
    expect(!!Scheduler).toBe(true);
  });

});
