'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:GoalCtrl
 * @description
 * # GoalCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('GoalListCtrl', function ($scope, GoalList, GoalConfig) {
        $scope.goals = GoalList.all();

        $scope.isActive = function (goal) {
            return goal.status !== GoalConfig.statuses.done;
        };
    });
