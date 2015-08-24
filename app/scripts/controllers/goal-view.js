'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:GoalViewCtrl
 * @description
 * # GoalViewCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('GoalViewCtrl', function ($scope, $routeParams, GoalList) {
        $scope.goal = GoalList.get($routeParams.id);
    });
