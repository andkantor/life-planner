'use strict';

describe('Service: DataLoader', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var DataLoader;
  beforeEach(inject(function (_DataLoader_) {
    DataLoader = _DataLoader_;
  }));

  it('should do something', function () {
    expect(!!DataLoader).toBe(true);
  });

});
