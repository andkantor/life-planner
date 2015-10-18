'use strict';

describe('Service: UserAwareStorage', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var UserAwareStorage;
  beforeEach(inject(function (_UserAwareStorage_) {
    UserAwareStorage = _UserAwareStorage_;
  }));

  it('should do something', function () {
    expect(!!UserAwareStorage).toBe(true);
  });

});
