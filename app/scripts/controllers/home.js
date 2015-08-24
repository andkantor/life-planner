'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('HomeCtrl', function ($scope, DateHelper) {
        var curr = new Date(),
            date;
        var firstDay = DateHelper.firstDayOfWeek(curr);
        var lastDay = DateHelper.lastDayOfWeek(curr);

        $scope.isThisWeek = function (activity) {
            date = DateHelper.format(activity.date);
            return date >= firstDay && date <= lastDay;
        };

        $scope.isThisMonth = function (activity) {
            return curr.getFullYear() === activity.date.getFullYear() &&
                curr.getMonth() === activity.date.getMonth();
        };
    });
