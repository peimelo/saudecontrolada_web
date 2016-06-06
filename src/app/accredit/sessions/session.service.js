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
      return $http.post(api, { login: user })
        .then(successCallback);

      function successCallback(response) {
        setAuthentication(response.data);
        return service.user;
      }
    }

    function logout() {
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
