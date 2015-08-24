'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.GoalPersistenceDecorator
 * @description
 * # GoalPersistenceDecorator
 * Factory in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('GoalDecorator', function (GoalList, RoleList, ActivityList) {
        // TODO nem decorator, átnevezni

        var role;
        var activity;

        var goalModel = {
            addRole: function (role) {
                if (!this.hasRole(role)) {
                    this.roles.push(role.id);
                }
            },
            hasRole: function (role) {
                return this.roles.indexOf(role.id) > -1;
            },
            removeRole: function (role) {
                _.remove(this.roles, function (roleId) {
                    return roleId === role.id;
                });
            },
            addActivity: function (activity) {
                if (!this.hasActivity(activity)) {
                    this.activities.push(activity.id);
                }
            },
            hasActivity: function (activity) {
                return this.activities.indexOf(activity.id) > -1;
            },
            removeActivity: function (activity) {
                _.remove(this.activities, function (activityId) {
                    return activityId === activity.id;
                });
            },
            save: function () {
                var self = this;

                GoalList.save(self);

                _.each(self.roles, function (roleId) {
                    role = RoleList.get(roleId);
                    role.addGoal(self);
                    RoleList.save(role);
                });

                _.each(self.activities, function (activityId) {
                    activity = ActivityList.get(activityId);
                    activity.setGoal(self);
                    ActivityList.save(role);
                });
            },
            remove: function () {
                var self = this;

                _.each(self.roles, function (roleId) {
                    role = RoleList.get(roleId);
                    role.removeGoal(self);
                    RoleList.save(role);
                });

                _.each(self.activities, function (activityId) {
                    activity = ActivityList.get(activityId);
                    ActivityList.remove(activity);
                });

                GoalList.remove(self);
            }
        };

        var decorateGoals = function (GoalList) {
            _.each(GoalList.all(), function (item) {
                _.extend(item, goalModel);
                item.date = new Date(item.date);
            });
        };

        var decorateGoalList = function (GoalList) {
            GoalList.createSkeleton = function () {
                var skeleton = {
                    name: '',
                    description: '',
                    status: 'new',
                    image: '',
                    tags: [],
                    priority: 1,
                    date: new Date(),
                    roles: [],
                    activities: []
                };

                _.extend(skeleton, goalModel);

                return skeleton;
            };
        };

        return {
            decorate: function () {
                decorateGoals(GoalList);
                decorateGoalList(GoalList);
            }
        };
    });
