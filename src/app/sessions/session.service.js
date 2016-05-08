(function() {
  'use strict';

  angular
    .module('app')
    .factory('sessionService', sessionService);

  /** @ngInject */
  function sessionService(alertingService, $http, $rootScope, $state) {
    var api = '/api/sessions';

    var service = {
      cleanAuth: cleanAuth,
      login: login,
      logout: logout,
      user: null
    };

    return service;

    function cleanAuth() {
      $rootScope.authentication_token = null;
      service.user = null;
    }

    function login(user) {
      return $http.post(api, { login: user })
        .then(getComplete);

      function getComplete(response) {
        $rootScope.authentication_token = response.data.authentication_token;
        service.user = response.data;
        return response.data;
      }
    }

    function logout() {
      return $http.delete(api + '/0')
        .then(getComplete);

      function getComplete(response) {
        cleanAuth();
        alertingService.addSuccess(response.data.message);
        $state.go('home');
        return response.data;
      }
    }
  }
})();
