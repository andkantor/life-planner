'use strict';

/**
 * @ngdoc directive
 * @name lifePlannerApp.directive:lpNavLink
 * @description
 * # lpNavLink
 */
angular.module('lifePlannerApp')
    .directive('lpNavLink', function ($location) {
        return {
            templateUrl: 'views/templates/directive/lp-nav-link.html',
            restrict: 'E',
            replace: true,
            scope: {
                title: '@',
                path: '@'
            },
            link: function ($scope) {
                $scope.isActive = function () {
                    return $location.$$path === $scope.path;
                };
            }
        };
    });
