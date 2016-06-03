(function() {
  'use strict';

  angular
    .module('app')
    .factory('sessionService', sessionService);

  /** @ngInject */
  function sessionService($http, $rootScope, $state) {
    var api = '/api/sessions';
    // var user = null;

    var service = {
      login: login,
      logout: logout,
      user: null
    };

    return service;

    function login(user) {
      return $http.post(api, { login: user })
        .then(successCallback);

      function successCallback(response) {
        setAuthentication(response.data);
        return service.user;
      }
    }

    function logout() {
      $state.go('home');

      return $http.delete(api + '/0')
        .then(responseCallback, responseCallback);

      function responseCallback(response) {
        setAuthentication(null);
        return response.data;
      }
    }

    function setAuthentication(userParam) {
      service.user = userParam;
      $rootScope.authenticationToken = userParam ? userParam.authentication_token : null;
    }
  }
})();
