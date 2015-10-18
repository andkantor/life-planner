'use strict';

describe('Service: SecretProvider', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var SecretProvider;
  beforeEach(inject(function (_SecretProvider_) {
    SecretProvider = _SecretProvider_;
  }));

  it('should do something', function () {
    expect(!!SecretProvider).toBe(true);
  });

});
