'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.User
 * @description
 * # User
 * Factory in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('User', function () {
        return {
            username: '',
            password: '',
            loggedIn: false,
            isLogged: function () {
                return this.loggedIn;
            }
        };
    });
