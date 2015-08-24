'use strict';

describe('Service: RolePersistenceDecorator', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var RolePersistenceDecorator;
  beforeEach(inject(function (_RolePersistenceDecorator_) {
    RolePersistenceDecorator = _RolePersistenceDecorator_;
  }));

  it('should do something', function () {
    expect(!!RolePersistenceDecorator).toBe(true);
  });

});
