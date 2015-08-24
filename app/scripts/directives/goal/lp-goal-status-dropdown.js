'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpGoalStatusDropDown
 * @description
 * # lpGoalStatusDropDown
 */
angular.module('lifePlannerApp')
    .directive('lpGoalStatusDropdown', function (GoalConfig) {
        return {
            templateUrl: 'views/templates/directive/goal/lp-goal-status-dropdown.html',
            restrict: 'E',
            scope: {
                goal: '='
            },
            link: function ($scope) {
                $scope.statuses = GoalConfig.statuses;

                $scope.changeStatus = function (status) {
                    $scope.goal.status = status;
                    $scope.goal.save();
                };
            }
        };
    });
