(function() {
  'use strict';

  angular
    .module('app')
    .factory('loginService', loginService);

  /** @ngInject */
  function loginService($http) {
    var apiHost = '/api/users/';

    var service = {
      apiHost: apiHost,
      user: null,
      login: login,
      logout: logout
    };

    return service;

    function login(user) {
      return $http.post(apiHost + 'sign_in', { session: { email: user.email, password: user.password } })
        .then(getComplete);

      function getComplete(response) {
        service.user = response.data.user;
        return response.data;
      }
    }

    function logout() {
      return $http.delete(apiHost + 'sign_out', { headers: { 'Authorization': this.user.authentication_token } } )
        .then(getComplete);

      function getComplete(response) {
        service.user = null;
        return response.data;
      }
    }
  }
})();
