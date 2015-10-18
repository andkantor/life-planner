'use strict';

/**
 * @ngdoc service
 * @name lifePlannerApp.Cipher
 * @description
 * # Cipher
 * Factory in the lifePlannerApp.
 */
angular.module('lifePlannerApp')
    .factory('Cipher', function (SecretProvider) {
        var encrypt = function (plain) {
            return CryptoJS.AES.encrypt(plain, SecretProvider.getSecret()).toString();
        };

        var decrypt = function (encrypted) {
            return CryptoJS.AES.decrypt(encrypted, SecretProvider.getSecret()).toString(CryptoJS.enc.Utf8);
        };

        return {
            encrypt: function (plain) {
                return encrypt(plain);
            },
            decrypt: function (encrypted) {
                return decrypt(encrypted);
            }
        };
    });
