'use strict';

/**
 * @ngdoc overview
 * @name lifePlannerApp
 * @description
 * # lifePlannerApp
 *
 * Main module of the application.
 */
angular
    .module('lifePlannerApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'mgcrea.ngStrap',
        'pascalprecht.translate'
    ])
    .config(function ($routeProvider, $translateProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/mission', {
                templateUrl: 'views/mission.html',
                controller: 'MissionCtrl'
            })
            .when('/goals', {
                templateUrl: 'views/goal-list.html',
                controller: 'GoalListCtrl'
            })
            .when('/goal/:id', {
                templateUrl: 'views/goal-view.html',
                controller: 'GoalViewCtrl'
            })
            .when('/activities', {
                templateUrl: 'views/activity-list.html',
                controller: 'ActivityListCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $translateProvider.translations('en_EN', {
            menu: {
                title: 'Life Planner',
                home: 'Home',
                mission: 'Mission',
                goals: 'Goals',
                activities: 'Activities'
            },
            button: {
                create: 'Create',
                save: 'Save',
                cancel: 'Cancel',
                edit: 'Edit',
                delete: 'Delete'
            },
            home: {
                activitiesThisWeek: {
                    title: 'Activities this week'
                },
                activitiesThisMonth: {
                    title: 'Activities this month'
                }
            },
            mission: {
                title: 'Personal Mission Statement',
                addRoleButton: 'Add new Role',
                roleModalTitle: 'Add new Role',
                role: {
                    button: {
                        showGoals: 'Goals'
                    }
                }
            },
            role: {
                name: 'Name',
                statement: 'Statement'
            },
            goal: {
                list: {
                    title: 'Goals',
                    numberOfGoals: 'Number of active goals: ',
                    noGoals: 'There are no goals yet.',
                    modalTitle: 'Create new goal',
                    saveSuccessText: 'You have successfully saved the goal!'
                },
                name: 'Name',
                description: 'Description',
                imageUrl: 'Image Url',
                priority: 'Priority',
                status: {
                    status: 'Status',
                    new: 'New',
                    inProgress: 'In Progress',
                    done: 'Done'
                },
                tags: 'Tags',
                date: 'Date to achieve'
            },
            activity: {
                list: {
                    title: 'Activities',
                    noActivities: 'There are no activities yet.'
                },
                modal: {
                    title: 'Add new activity'
                },
                title: 'Title',
                status: {
                    status: 'Status',
                    new: 'New',
                    done: 'Done'
                },
                date: 'Date to perform'
            }
        });
    });
