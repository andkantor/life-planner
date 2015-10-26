'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpRoleRow
 * @description
 * # lpRoleRow
 */
angular.module('lifePlannerApp')
    .directive('lpRoleRow', function ($filter, GoalList) {
        return {
            templateUrl: 'views/templates/directive/lp-role-row.html',
            restrict: 'E',
            scope: {
                role: '='
            },
            link: function ($scope) {
                $scope.editable = false;
                $scope.showGoals = false;
                $scope.goals = _.filter(GoalList.all(), function (goal) {
                    return goal.hasRole($scope.role);
                });

                $scope.showForm = function () {
                    $scope.editable = true;
                };

                $scope.saveRole = function () {
                    $scope.editable = false;
                    $scope.role.save();
                };

                $scope.removeRole = function () {
                    $scope.role.remove();
                };
            }
        };
    });
