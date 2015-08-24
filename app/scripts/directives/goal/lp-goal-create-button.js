'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpGoalCreateButton
 * @description
 * # lpGoalCreateButton
 */
angular.module('lifePlannerApp')
    .directive('lpGoalCreateButton', function ($modal, GoalConfig, Notifier, GoalList, RoleList) {
        return {
            templateUrl: 'views/templates/directive/goal/lp-goal-create-button.html',
            restrict: 'E',
            replace: true,
            scope: {
                goals: '='
            },
            link: function ($scope) {
                $scope.roles = RoleList.all();

                // Modal config
                var addGoalModal = $modal({
                    scope: $scope,
                    templateUrl: 'views/templates/modal/lp-goal-modal.html',
                    show: false
                });

                $scope.goalConfig = GoalConfig;

                $scope.selectPriority = function (priority) {
                    $scope.goal.priority = priority;
                };

                $scope.hasTag = function (tag) {
                    return _.contains($scope.goal.tags, tag);
                };

                $scope.toggleTag = function (tag) {
                    if ($scope.hasTag(tag)) {
                        _.remove($scope.goal.tags, function (item) {
                            return item === tag;
                        });
                    } else {
                        $scope.goal.tags.push(tag);
                    }
                };

                $scope.toggleRole = function (role) {
                    if ($scope.goal.hasRole(role)) {
                        $scope.goal.removeRole(role);
                    } else {
                        $scope.goal.addRole(role);
                    }
                };

                $scope.saveGoal = function () {
                    $scope.goal.save();

                    addGoalModal.hide();

                    Notifier.success('goal.list.saveSuccessText');
                };

                $scope.showGoalModal = function (goal) {
                    if (goal) {
                        $scope.goal = goal;
                        $scope.modalTitle = 'goal.modal.update_title';
                    } else {
                        $scope.goal = GoalList.createSkeleton();
                        $scope.modalTitle = 'goal.modal.create_title';
                    }

                    addGoalModal.$promise.then(addGoalModal.show);
                };
            }
        };
    });
