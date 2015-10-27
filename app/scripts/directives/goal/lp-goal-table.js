'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpGoalTable
 * @description
 * # lpGoalTable
 */
angular.module('lifePlannerApp')
    .directive('lpGoalTable', function ($location, $translate, GoalConfig, GoalList) {
        return {
            templateUrl: 'views/templates/directive/goal/lp-goal-table.html',
            restrict: 'E',
            scope: {
                condition: '=?',
                noGoalsText: '@',
                enableAdd: '=?'
            },
            link: function ($scope) {
                $scope.condition = $scope.condition || function () { return true; };
                $scope.enableAdd = $scope.enableAdd || false;

                $scope.goals = GoalList.all();

                $scope.statuses = {};
                _.each(GoalConfig.statuses, function (status) {
                    $scope.statuses[status] = $translate.instant('goal.status.' + status);
                });

                $scope.viewGoal = function (goal) {
                    $location.path('/goal/' + goal.id);
                };

                $scope.removeGoal = function (goal) {
                    goal.remove();
                };
            }
        };
    });
