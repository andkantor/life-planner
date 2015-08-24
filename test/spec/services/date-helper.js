'use strict';

describe('Service: DateHelper', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var DateHelper;
  beforeEach(inject(function (_DateHelper_) {
    DateHelper = _DateHelper_;
  }));

  it('should do something', function () {
    expect(!!DateHelper).toBe(true);
  });

});
