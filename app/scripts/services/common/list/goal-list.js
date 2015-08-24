'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.GoalList
 * @description
 * # GoalList
 * Service in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('GoalList', function (ListFactory) {
        return ListFactory.create('LP-Goals');
    });
