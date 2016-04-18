(function() {
  'use strict';

  angular
    .module('app')
    .factory('sessionService', sessionService);

  /** @ngInject */
  function sessionService($http, $rootScope, $state) {
    var api = '/api/sessions';

    var service = {
      user: null,
      login: login,
      logout: logout
    };

    return service;

    function login(user) {
      return $http.post(api, { login: { email: user.email, password: user.password } })
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
        $rootScope.authentication_token = null;
        service.user = null;
        $state.go('home');
        return response.data;
      }
    }
  }
})();
