'use strict';

describe('Service: common/ListFactory', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var common/ListFactory;
  beforeEach(inject(function (_common/ListFactory_) {
    common/ListFactory = _common/ListFactory_;
  }));

  it('should do something', function () {
    expect(!!common/ListFactory).toBe(true);
  });

});
