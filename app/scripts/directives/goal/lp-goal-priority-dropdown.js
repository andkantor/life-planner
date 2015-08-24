'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpGoalPriorityDropdown
 * @description
 * # lpGoalPriorityDropdown
 */
angular.module('lifePlannerApp')
    .directive('lpGoalPriorityDropdown', function (GoalConfig) {
        return {
            templateUrl: 'views/templates/directive/goal/lp-goal-priority-dropdown.html',
            restrict: 'E',
            scope: {
                goal: '='
            },
            link: function ($scope) {
                $scope.priorities = GoalConfig.priorities;

                $scope.changePriority = function (priority) {
                    $scope.goal.priority = priority;
                    $scope.goal.save();
                };
            }
        };
    });
