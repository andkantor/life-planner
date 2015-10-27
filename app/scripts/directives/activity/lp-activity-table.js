'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpActivityTable
 * @description
 * # lpActivityTable
 */
angular.module('lifePlannerApp')
    .directive('lpActivityTable', function ($translate, ActivityList, Scheduler, DateHelper) {
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

                $scope.bringForwardActions = {};
                _.each(Scheduler.BRING_FORWARD_ACTIONS, function (action) {
                    $scope.bringForwardActions[action] = $translate.instant('schedule.reschedule.' + action);
                });

                $scope.postponeActions = {};
                _.each(Scheduler.POSTPONE_ACTIONS, function (action) {
                    $scope.postponeActions[action] = $translate.instant('schedule.reschedule.' + action);
                });

                $scope.reschedule = function (activity, action) {
                    Scheduler.reschedule(activity, action);
                    activity.save();

                    if (DateHelper.compare(activity.date, activity.getGoal().date) === 1) {
                        activity.getGoal().date = new Date(DateHelper.format(activity.date));
                        activity.getGoal().save();
                    }
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
