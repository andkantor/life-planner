'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpRoleRow
 * @description
 * # lpRoleRow
 */
angular.module('lifePlannerApp')
    .directive('lpRoleRow', function (RoleList, GoalList) {
        return {
            templateUrl: 'views/templates/directive/lp-role-row.html',
            restrict: 'E',
            scope: {
                role: '='
            },
            link: function ($scope) {
                $scope.editable = false;
                $scope.showGoals = false;
                $scope.goals = [];
                _.each($scope.role.goals, function (goalId) {
                    $scope.goals.push(GoalList.get(goalId));
                });

                $scope.showForm = function () {
                    $scope.editable = true;
                };

                $scope.saveRole = function () {
                    $scope.editable = false;
                    RoleList.save($scope.role);
                };

                $scope.removeRole = function () {
                    RoleList.remove($scope.role);
                };
            }
        };
    });
