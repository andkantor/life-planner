'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.RolePersistenceDecorator
 * @description
 * # RolePersistenceDecorator
 * Factory in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('RoleDecorator', function (RoleList, GoalList) {

        var goal;
        var roleModel = {
            addGoal: function (goal) {
                if (!this.hasGoal(goal)) {
                    console.log(this.goals);
                    this.goals.push(goal.id);
                }
            },
            hasGoal: function (goal) {
                return this.goals.indexOf(goal.id) > -1;
            },
            removeGoal: function (goal) {
                _.remove(this.goals, function (goalId) {
                    return goalId === goal.id;
                });
            },
            save: function () {
                var self = this;

                RoleList.save(self);

                _.each(self.goals, function (goalId) {
                    goal = GoalList.get(goalId);
                    goal.addRole(self);
                    GoalList.save(goal);
                });
            },
            remove: function () {
                var self = this;

                _.each(self.goals, function (goalId) {
                    goal = GoalList.get(goalId);
                    goal.removeRole(self);
                    GoalList.save(goal);
                });

                RoleList.remove(self);
            }
        };

        var decorateRoles = function (RoleList) {
            _.each(RoleList.all(), function (item) {
                _.extend(item, roleModel);
            });
        };

        var decorateRoleList = function (RoleList) {
            RoleList.createSkeleton = function () {
                var skeleton = {
                    name: '',
                    statement: '',
                    goals: []
                };

                _.extend(skeleton, roleModel);

                return skeleton;
            };
        };

        return {
            decorate: function () {
                decorateRoles(RoleList);
                decorateRoleList(RoleList);
            }
        };
    });
