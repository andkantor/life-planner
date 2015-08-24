'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.DateHelper
 * @description
 * # DateHelper
 * Service in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .service('DateHelper', function () {
        this.format = function (date) {
            return date.toISOString().slice(0, 10);
        };

        this.firstDayOfWeek = function (date) {
            var first = date.getDate() - date.getDay();
            return this.format(new Date(date.setDate(first)));
        };

        this.lastDayOfWeek = function (date) {
            var last = date.getDate() - date.getDay() + 6;
            return this.format(new Date(date.setDate(last)));
        };
    });
