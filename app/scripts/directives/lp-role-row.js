'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpRoleRow
 * @description
 * # lpRoleRow
 */
angular.module('lifePlannerApp')
    .directive('lpRoleRow', function () {
        return {
            templateUrl: 'views/templates/directive/lp-role-row.html',
            restrict: 'E',
            scope: {
                role: '='
            },
            link: function ($scope) {
                $scope.editable = false;
                $scope.showGoals = false;

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

                $scope.hasGoal = function (goal) {
                    return $scope.role.hasGoal(goal);
                };
            }
        };
    });
