'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.DateHelper
 * @description
 * # DateHelper
 * Service in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('DateHelper', function () {
        var date;
        var DateHelper = {
            format: function (date) {
                return date.toISOString().slice(0, 10);
            },

            compare: function (dateA, dateB) {
                dateA = DateHelper.format(dateA);
                dateB = DateHelper.format(dateB);

                if (dateA > dateB) {
                    return 1;
                } else if (dateA === dateB) {
                    return 0;
                }

                return -1;
            },

            getFirstDayOfWeek: function (date) {
                var day = date.getDay();
                var first = date.getDate() - day + (day === 0 ? -6 : 1);
                date.setDate(first);

                return DateHelper.format(date);
            },

            getLastDayOfWeek: function (firstDay) {
                var end = new Date(firstDay);
                end.setDate(end.getDate() + 6);

                return DateHelper.format(end);
            },

            getDate: function (daysToAdd) {
                daysToAdd = daysToAdd || 0;

                date = new Date();
                date.setDate(date.getDate() + daysToAdd);

                return date;
            },

            getWeek: function (date) {
                var firstDay = DateHelper.getFirstDayOfWeek(date);

                return new Week(
                    firstDay,
                    DateHelper.getLastDayOfWeek(firstDay)
                );
            }
        };

        var Week = function (firstDay, lastDay) {
            this.toString = function () {
                return firstDay + ' - ' + lastDay;
            };

            this.isWithin = function (dateAware) {
                date = DateHelper.format(dateAware.date);
                return date >= firstDay && date <= lastDay;
            };
        };

        return {
            format: DateHelper.format,
            compare: DateHelper.compare,
            getDate: DateHelper.getDate,
            getWeek: DateHelper.getWeek
        };
    });
