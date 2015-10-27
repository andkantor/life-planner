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
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
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
            .when('/goal/create', {
                templateUrl: 'views/goal-create.html',
                controller: 'GoalCreateCtrl'
            })
            .when('/goal/:id', {
                templateUrl: 'views/goal-view.html',
                controller: 'GoalViewCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        $translateProvider.translations('en_EN', {
            login: {
                title: 'Please sign in',
                username: 'Username',
                password: 'Password',
                login: 'Sign in',
                success: 'You have signed in successfully.',
                error: {
                    username: 'Username cannot be empty!',
                    password: 'Password cannot be empty!',
                    invalidPassword: 'Invalid password!'
                }
            },
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
                activities: {
                    prevWeek: 'Activities previous week',
                    thisWeek: 'Activities this week',
                    nextWeek: 'Activities next week',
                    afterNextWeek: 'Activities after next week'
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
                create: {
                    alsoCreateActivity: 'Also create activity.'
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
                roles: 'Roles',
                tags: 'Tags',
                date: 'Date to achieve'
            },
            activity: {
                list: {
                    title: 'Activities',
                    noActivities: 'There are no activities yet.',
                    saveSuccessText: 'You have successfully saved the activity!'
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
            },
            schedule: {
                reschedule: {
                    bringForwardOneDay: 'Bring forward by a day',
                    bringForwardOneWeek: 'Bring forward by a week',
                    bringForwardOneMonth: 'Bring forward by a month',
                    postponeOneDay: 'Postpone by a day',
                    postponeOneWeek: 'Postpone by a week',
                    postponeOneMonth: 'Postpone by a month'
                }
            }
        });
    })
    .run(function($rootScope, $location, User) {
        $rootScope.$on( "$routeChangeStart", function(event, next) {
            if (!User.isLogged()) {
                if (next.loadedTemplateUrl !== "views/login.html") {
                    $location.path("/login");
                }
            }
        });
    });