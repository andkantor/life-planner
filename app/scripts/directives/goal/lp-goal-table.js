'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpGoalTable
 * @description
 * # lpGoalTable
 */
angular.module('lifePlannerApp')
    .directive('lpGoalTable', function ($location, GoalList) {
        return {
            templateUrl: 'views/templates/directive/goal/lp-goal-table.html',
            restrict: 'E',
            scope: {
                goals: '=',
                noGoalsText: '@',
                enableAdd: '=?'
            },
            link: function ($scope) {
                $scope.viewGoal = function (goal) {
                    $location.path('/goal/' + goal.id);
                };

                $scope.removeGoal = function (goal) {
                    goal.remove();
                };
            }
        };
    });
