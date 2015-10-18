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
                RoleList.save(this);

                _.each(this.goals, function (goalId) {
                    goal = GoalList.get(goalId);
                    goal.addRole(this);
                    GoalList.save(goal);
                });
            },
            remove: function () {
                _.each(this.goals, function (goalId) {
                    goal = GoalList.get(goalId);
                    goal.removeRole(this);
                    GoalList.save(goal);
                });

                RoleList.remove(this);
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
