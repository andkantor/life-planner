'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.RoleList
 * @description
 * # RoleList
 * Service in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('RoleList', function (ListFactory) {
        return ListFactory.create('LP-Roles');
    });
