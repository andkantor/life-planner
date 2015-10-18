'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.SecretProvider
 * @description
 * # SecretProvider
 * Factory in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('SecretProvider', function () {
        var secret = '';

        return {
            setSecret: function (value) {
                secret = value;
            },
            getSecret: function () {
                return secret;
            }
        };
    });
