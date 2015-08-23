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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
