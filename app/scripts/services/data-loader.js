'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.DataLoader
 * @description
 * # DataLoader
 * Factory in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('DataLoader', function (ActivityList, ActivityDecorator, GoalList, GoalDecorator, RoleList, RoleDecorator) {
        return {
            load: function () {
                ActivityList.load();
                ActivityDecorator.decorate();

                GoalList.load();
                GoalDecorator.decorate();

                RoleList.load();
                RoleDecorator.decorate();
            }
        };
    });
