'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.Storage
 * @description
 * # Storage
 * Service in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .service('Storage', function () {
        this.get = function (name, def) {
            if (localStorage[name]) {
                return JSON.parse(localStorage[name]);
            }

            return def;
        };

        this.set = function (name, value) {
            localStorage[name] = JSON.stringify(value);
        };
    });
