'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:GoalCtrl
 * @description
 * # GoalCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('GoalListCtrl', function ($scope, GoalList) {
        $scope.goals = GoalList.all();
    });
