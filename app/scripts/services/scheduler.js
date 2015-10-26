'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.Scheduler
 * @description
 * # Scheduler
 * Factory in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('Scheduler', function () {
        var Scheduler = {
            reschedule: function (subject, action) {
                switch (action) {
                    case 'bringForwardOneDay':
                        subject.date.setDate(subject.date.getDate() - 1);
                        return;
                    case 'bringForwardOneWeek':
                        subject.date.setDate(subject.date.getDate() - 7);
                        return;
                    case 'bringForwardOneMonth':
                        subject.date.setMonth(subject.date.getMonth() - 1);
                        return;
                    case 'postponeOneDay':
                        subject.date.setDate(subject.date.getDate() + 1);
                        return;
                    case 'postponeOneWeek':
                        subject.date.setDate(subject.date.getDate() + 7);
                        return;
                    case 'postponeOneMonth':
                        subject.date.setMonth(subject.date.getMonth() + 1);
                        return;
                }
            }
        };

        return {
            BRING_FORWARD_ACTIONS: ['bringForwardOneDay', 'bringForwardOneWeek', 'bringForwardOneMonth'],
            POSTPONE_ACTIONS: ['postponeOneDay', 'postponeOneWeek', 'postponeOneMonth'],
            reschedule: function (subject, action) {
                return Scheduler.reschedule(subject, action);
            }
        };
    });
