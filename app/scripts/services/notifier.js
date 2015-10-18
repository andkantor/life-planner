'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.Notifier
 * @description
 * # Notifier
 * Service in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('Notifier', function ($translate) {
        var options = {
            newest_on_top: true,
            delay: 2000,
            timer: 500,
            placement: {
                from: "top",
                align: "center"
            },
            offset: 50,
            allow_dismiss: true,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            }
        };

        return {
            success: function (message) {
                $translate(message).then(function (value) {
                    $.notify(
                        value,
                        _.extend({type: 'success'}, options)
                    );
                });
            },
            error: function (message) {
                $translate(message).then(function (value) {
                    $.notify(
                        value,
                        _.extend({type: 'danger'}, options)
                    );
                });
            }
        };
    });
