'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:MissionCtrl
 * @description
 * # MissionCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('MissionCtrl', function ($scope, $modal, RoleList) {
        $scope.roles = RoleList.all();
        $scope.role = RoleList.createSkeleton();

        var addRoleModal = $modal({
            scope: $scope,
            templateUrl: 'views/templates/modal/lp-role-modal.html',
            show: false
        });

        $scope.addRole = function () {
            RoleList.save($scope.role);
            $scope.role = RoleList.createSkeleton();
            addRoleModal.hide();
        };

        $scope.showModal = function () {
            addRoleModal.$promise.then(addRoleModal.show);
        };
    });
