(function() {
  'use strict';

  angular
    .module('app')
    .factory('sessionService', sessionService);

  /** @ngInject */
  function sessionService($http, localStorageService, $rootScope) {
    var api = '/api/sessions';

    var service = {
      login: login,
      logout: logout,
      user: null,
      USERKEY: 'utoken'
    };

    active();

    return service;

    function active() {
      var localUser = localStorageService.get(service.USERKEY);
      if (localUser) {
        delete localUser['admin'];
        setAuthentication(localUser);
      }
    }

    function login(user) {
      return $http.post(api, user)
        .then(successCallback);

      function successCallback(response) {
        setAuthentication(angular.copy(response.data));

        delete response.data['admin'];
        localStorageService.add(service.USERKEY, response.data);

        return service.user;
      }
    }

    function logout() {
      localStorageService.remove(service.USERKEY);
      setAuthentication(null);
    }

    function setAuthentication(user) {
      service.user = user;
      $rootScope.authenticationToken = user ? user.authentication_token : null;
    }
  }
})();
