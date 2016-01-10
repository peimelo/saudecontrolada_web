(function() {
  'use strict';

  angular
    .module('app')
    .factory('loginService', loginService);

  /** @ngInject */
  function loginService($http, $rootScope, $state) {
    var service = {
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
      return $http.delete('/api/signout')
        .then(getComplete);

      function getComplete(response) {
        $rootScope.user = null;
        service.user = null;
        $state.go('home');
        return response.data;
      }
    }
  }
})();
