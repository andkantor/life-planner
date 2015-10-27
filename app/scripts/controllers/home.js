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
        $scope.thisWeek = DateHelper.getWeek(DateHelper.getDate());
        $scope.nextWeek = DateHelper.getWeek(DateHelper.getDate(7));
        $scope.afterNextWeek = DateHelper.getWeek(DateHelper.getDate(14));

        var thisWeekFirstDay = $scope.thisWeek.firstDay;
        $scope.notDone = function (activity) {
            return activity.status !== 'done' &&
                DateHelper.format(activity.date) < thisWeekFirstDay;
        };

        //$scope.isThisMonth = function (activity) {
        //    return curr.getFullYear() === activity.date.getFullYear() &&
        //        curr.getMonth() === activity.date.getMonth();
        //};
    });
