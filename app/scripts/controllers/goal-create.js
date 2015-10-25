'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:GoalCreateCtrl
 * @description
 * # GoalCreateCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('GoalCreateCtrl', function ($scope, $location, GoalList, RoleList, GoalConfig, ActivityList, Notifier) {
        $scope.goal = GoalList.createSkeleton();

        $scope.roles = RoleList.all();
        $scope.alsoCreateActivity = true;

        $scope.goalConfig = GoalConfig;

        $scope.selectPriority = function (priority) {
            $scope.goal.priority = priority;
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

            if ($scope.alsoCreateActivity) {
                var activity = ActivityList.createSkeleton();

                activity.setGoal($scope.goal);
                activity.title = $scope.goal.name;
                activity.date = $scope.goal.date;

                activity.save();
            }

            Notifier.success('goal.list.saveSuccessText');

            $location.path('/goals');
        };
    });
