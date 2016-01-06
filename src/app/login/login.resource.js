(function() {
  'use strict';

  angular
    .module('app')
    .factory('loginService', loginService);

  /** @ngInject */
  function loginService($http, $rootScope) {
    var apiHost = '/api/users/';

    var service = {
      apiHost: apiHost,
      user: null,
      login: login,
      logout: logout
    };

    return service;

    function login(user) {
      return $http.post('/api/signin', { session: { email: user.email, password: user.password } })
        .then(getComplete);

      function getComplete(response) {
        $rootScope.user = response.data;
        service.user = response.data;
        return response.data;
      }
    }

    function logout() {
      return $http.delete('/api/signout', { headers: { 'Authorization': this.user.authentication_token } } )
        .then(getComplete);

      function getComplete(response) {
        $rootScope.user = null;
        service.user = null;
        return response.data;
      }
    }
  }
})();
