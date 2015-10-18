'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpAddActivityButton
 * @description
 * # lpAddActivityButton
 */
angular.module('lifePlannerApp')
    .directive('lpActivityCreateButton', function ($modal, ActivityList, Notifier) {
        return {
            templateUrl: 'views/templates/directive/activity/lp-activity-create-button.html',
            restrict: 'E',
            replace: true,
            scope: {
                goal: '='
            },
            link: function ($scope) {
                $scope.activity = ActivityList.createSkeleton();

                // Modal config
                var addActivityModal = $modal({
                    scope: $scope,
                    templateUrl: 'views/templates/modal/lp-activity-modal.html',
                    show: false
                });

                $scope.statuses = {
                    new: 'new',
                    done: 'done'
                };

                $scope.addActivity = function () {
                    $scope.activity.setGoal($scope.goal);
                    $scope.activity.save();
                    addActivityModal.hide();

                    Notifier.success('activity.list.saveSuccessText');

                    $scope.activity = ActivityList.createSkeleton();
                };

                $scope.showActivityModal = function () {
                    addActivityModal.$promise
                        .then(addActivityModal.show)
                        .then();
                };
            }
        };
    });
