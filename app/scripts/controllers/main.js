'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('MainCtrl', function ($scope, $translate, User) {
        $translate.use('en_EN');

        $scope.user = User;
    });
