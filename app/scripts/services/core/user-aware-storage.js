'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.UserAwareStorage
 * @description
 * # UserAwareStorage
 * Factory in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .service('UserAwareStorage', function (User, Cipher) {
        this.get = function (name, def) {
            name = name + '-' + User.username;
            if (localStorage[name]) {
                return JSON.parse(Cipher.decrypt(localStorage[name]));
            }

            return def;
        };

        this.set = function (name, value) {
            name = name + '-' + User.username;
            localStorage[name] = Cipher.encrypt(JSON.stringify(value));
        };
    });
