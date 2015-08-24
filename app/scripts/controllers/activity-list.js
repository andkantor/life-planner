'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:ActivityListCtrl
 * @description
 * # ActivityListCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('ActivityListCtrl', function ($scope, ActivityList, GoalList) {
        $scope.goals = _.filter(GoalList.all(), function (goal) {
            return goal.activities.length > 0;
        });
    });
