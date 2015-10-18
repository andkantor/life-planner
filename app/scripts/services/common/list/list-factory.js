'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.ListFactory
 * @description
 * # common/ListFactory
 * Service in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('ListFactory', function (UserAwareStorage) {
        var List = function (storageKey) {
            var list;

            this.load = function () {
                list = UserAwareStorage.get(storageKey, { elements: [], nextId: 1 });
            };

            this.load();

            this.get = function (id) {
                id = parseInt(id);
                return _.find(list.elements, function (item) {
                    return item.id === id;
                });
            };

            this.remove = function (element) {
                _.remove(list.elements, function (e) {
                    return e.id === element.id;
                });

                UserAwareStorage.set(storageKey, list);
            };

            this.save = function (element) {
                if (!element.id) {
                    element.id = list.nextId++;
                    list.elements.push(element);
                }

                UserAwareStorage.set(storageKey, list);
            };

            this.all = function () {
                return list.elements;
            };
        };

        return {
            create: function (storageKey) {
                return new List(storageKey);
            }
        };
    });
