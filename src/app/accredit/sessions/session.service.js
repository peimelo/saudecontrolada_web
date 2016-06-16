(function() {
  'use strict';

  angular
    .module('app')
    .factory('sessionService', sessionService);

  /** @ngInject */
  function sessionService($http, $rootScope) {
    var api = '/api/sessions';

    var service = {
      login: login,
      logout: logout,
      user: null
    };

    return service;

    function login(user) {
      return $http.post(api, user)
        .then(successCallback);

      function successCallback(response) {
        setAuthentication(response.data);
        return service.user;
      }
    }

    function logout() {
      setAuthentication(null);
    }

    function setAuthentication(userParam) {
      service.user = userParam;
      $rootScope.authenticationToken = userParam ? userParam.authentication_token : null;
    }
  }
})();
