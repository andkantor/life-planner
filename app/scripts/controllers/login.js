'use strict';

/**
 * @ngdoc function
 * @name lifePlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the lifePlannerApp
 */
angular.module('lifePlannerApp')
    .controller('LoginCtrl', function ($scope, $location, User, UserList, Cipher, SecretProvider, DataLoader, Notifier) {
        var passwordCheck = 'apple';

        $scope.username = '';
        $scope.password = '';

        var validate = function () {
            if ($scope.username === '') {
                Notifier.error('login.error.username');
                return false;
            } else if ($scope.password === '') {
                Notifier.error('login.error.password');
                return false;
            }

            var user = UserList.get($scope.username);

            if (user) {
                SecretProvider.setSecret($scope.password);
                if (Cipher.decrypt(user.passwordCheck) !== passwordCheck) {
                    Notifier.error('login.error.invalidPassword');
                    return false;
                }
            }

            return true;
        };

        $scope.login = function () {
            if (validate()) {
                SecretProvider.setSecret($scope.password);
                var user = UserList.get($scope.username);

                if (!user) {
                    user = {
                        username: $scope.username,
                        passwordCheck: Cipher.encrypt(passwordCheck).toString()
                    };

                    UserList.save(user);
                }

                User.username = $scope.username;
                User.password = $scope.password;
                User.loggedIn = true;

                DataLoader.load();

                $location.path('/');
            }
        };
    });
