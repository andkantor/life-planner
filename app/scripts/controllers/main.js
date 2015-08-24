'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('MainCtrl', function ($scope, $translate, $location, GoalDecorator, RoleDecorator, ActivityDecorator) {
        $translate.use('en_EN');

        GoalDecorator.decorate();
        RoleDecorator.decorate();
        ActivityDecorator.decorate();
    });
