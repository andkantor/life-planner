'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpGoalView
 * @description
 * # lpGoalView
 */
angular.module('lifePlannerApp')
    .directive('lpGoalView', function (ActivityList) {
        return {
            templateUrl: 'views/templates/directive/goal/lp-goal-view.html',
            restrict: 'E',
            link: function ($scope) {
                $scope.activities = _.filter(ActivityList.all(), function (activity) {
                    return activity.goalId === $scope.goal.id;
                });
            }
        };
    });
