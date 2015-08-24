'use strict';

describe('Service: RoleList', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var RoleList;
  beforeEach(inject(function (_RoleList_) {
    RoleList = _RoleList_;
  }));

  it('should do something', function () {
    expect(!!RoleList).toBe(true);
  });

});
