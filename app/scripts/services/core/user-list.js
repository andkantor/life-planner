'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.UserList
 * @description
 * # UserList
 * Factory in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('UserList', function (Storage) {
        var List = function (storageKey) {
            var list = Storage.get(storageKey, { elements: [], nextId: 1 });

            this.get = function (username) {
                return _.find(list.elements, function (item) {
                    return item.username === username;
                });
            };

            this.save = function (user) {
                if (!user.id) {
                    user.id = list.nextId++;
                    list.elements.push(user);
                }

                Storage.set(storageKey, list);
            };
        };

        return new List('LP-Users');
    });
