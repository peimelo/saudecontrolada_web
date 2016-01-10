//(function() {
//  'use strict';
//
//  angular
//    .module('app')
//    .factory('cadastrarService', cadastrarService);
//
//  /** @ngInject */
//  function cadastrarService($log, $http) {
//    var apiHost = '/api/users/';
//
//    var service = {
//      apiHost: apiHost,
//      user: null,
//      create: create,
//      logout: logout
//    };
//
//    return service;
//
//    function create(user) {
//      return $http.post(apiHost, {
//        user: {
//          email: user.email,
//          password: user.password,
//          name: 'Melion',
//          gender: 'Masculino',
//          date_of_birth: '1977-09-25'
//        }
//      })
//        .then(getComplete);
//
//      function getComplete(response) {
//        service.user = response.data.user;
//        return response.data;
//      }
//    }
//
//    function logout() {
//      return $http.delete(apiHost + 'sign_out', { headers: { 'Authorization': this.user.authentication_token } } )
//        .then(getComplete);
//
//      function getComplete(response) {
//        service.user = null;
//        return response.data;
//      }
//    }
//
//  }
//})();
