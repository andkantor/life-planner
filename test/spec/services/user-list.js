'use strict';

describe('Service: UserList', function () {

  // load the service's module
  beforeEach(module('lifePlannerApp'));

  // instantiate service
  var UserList;
  beforeEach(inject(function (_UserList_) {
    UserList = _UserList_;
  }));

  it('should do something', function () {
    expect(!!UserList).toBe(true);
  });

});
