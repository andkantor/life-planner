'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.ActivityList
 * @description
 * # ActivityList
 * Service in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('ActivityList', function (ListFactory) {
        return ListFactory.create('LP-Activities');
    });
