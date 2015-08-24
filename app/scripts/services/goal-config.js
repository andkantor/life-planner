'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.GoalConfig
 * @description
 * # GoalConfig
 * Service in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .service('GoalConfig', function () {
        this.statuses = {
            new: 'new',
            inProgress: 'inProgress',
            done: 'done'
        };

        this.priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        this.tags = [
            'life',
            'family',
            'sport',
            'career',
            'health',
            'future',
            'personality',
            'product',
            'entertainment',
            'experience',
            'donation',
            'learn',
            'hobby',
            'important',
            'other'
        ].sort();
    });
