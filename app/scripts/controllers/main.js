'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('MainCtrl', function ($scope, $translate, User, DataLoader, SecretProvider) {
        $translate.use('en_EN');

        //User.username = 'admin2';
        //User.password = 'admin';
        //User.loggedIn = true;
        //
        //SecretProvider.setSecret('admin');
        //DataLoader.load();

        $scope.user = User;
    });
