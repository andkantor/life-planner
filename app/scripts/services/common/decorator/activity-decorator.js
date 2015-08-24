'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.ActivityDecorator
 * @description
 * # ActivityDecorator
 * Service in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('ActivityDecorator', function (ActivityList, GoalList) {

        var activityModel = {
            setGoal: function (goal) {
                this.goalId = goal.id;
            },
            getGoal: function () {
                return GoalList.get(this.goalId);
            },
            save: function () {
                ActivityList.save(this);

                this.getGoal().addActivity(this);
                this.getGoal().save();
            },
            remove: function () {
                this.getGoal().removeActivity(this);
                this.getGoal().save();

                ActivityList.remove(this);
            }
        };

        var decorateActivities = function (ActivityList) {
            _.each(ActivityList.all(), function (item) {
                _.extend(item, activityModel);
                item.date = new Date(item.date);
            });
        };

        var decorateActivityList = function (ActivityList) {
            ActivityList.createSkeleton = function () {
                var skeleton = {
                    title: '',
                    status: 'new',
                    date: new Date(),
                    goalId: 0
                };

                _.extend(skeleton, activityModel);

                return skeleton;
            };
        };

        return {
            decorate: function () {
                decorateActivities(ActivityList);
                decorateActivityList(ActivityList);
            }
        };
    });
