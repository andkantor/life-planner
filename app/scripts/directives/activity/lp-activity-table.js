'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpActivityTable
 * @description
 * # lpActivityTable
 */
angular.module('lifePlannerApp')
    .directive('lpActivityTable', function (ActivityList) {
        return {
            templateUrl: 'views/templates/directive/activity/lp-activity-table.html',
            restrict: 'E',
            scope: {
                title: '@',
                goal: '=?',
                condition: '=?',
                enableAdd: '=?'
            },
            link: function ($scope) {
                $scope.activities = ActivityList.all();

                if ($scope.goal && $scope.condition === undefined) {
                    $scope.condition = function (activity) {
                        return $scope.goal.id === activity.goalId;
                    };
                }

                $scope.showChecked = true;
                $scope.showUnchecked = true;

                $scope.showActivity = function (activity) {
                    return (activity.status === 'done' && $scope.showChecked) ||
                        (activity.status === 'new' && $scope.showUnchecked);
                };

                $scope.changeActivityStatus = function (activity) {
                    activity.status = activity.status === 'done' ? 'new' : 'done';
                    activity.save();
                };

                $scope.removeActivity = function (activity) {
                    activity.remove();
                };
            }
        };
    });
