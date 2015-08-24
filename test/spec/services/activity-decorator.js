'use strict';

describe('Service: ActivityDecorator', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var ActivityDecorator;
  beforeEach(inject(function (_ActivityDecorator_) {
    ActivityDecorator = _ActivityDecorator_;
  }));

  it('should do something', function () {
    expect(!!ActivityDecorator).toBe(true);
  });

});
