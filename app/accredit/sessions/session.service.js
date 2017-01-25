(function() {
  'use strict';

  angular
    .module('app')
    .constant('USERKEY', 'utoken')
    .factory('sessionService', sessionService);

  /** @ngInject */
  function sessionService($http, examsService, localStorageService, referencesService,
                          $rootScope, unitsService, USERKEY) {
    var api = '/api/sessions';

    var service = {
      login: login,
      logout: logout,
      user: null
    };

    active();

    return service;

    function active() {
      var localUser = localStorageService.get(USERKEY);
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
        localStorageService.add(USERKEY, response.data);

        examsService.clearExams();
        referencesService.clearReferences();
        unitsService.clearUnits();

        return service.user;
      }
    }

    function logout() {
      localStorageService.remove(USERKEY);
      setAuthentication(null);
    }

    function setAuthentication(user) {
      service.user = user;
      $rootScope.authenticationToken = user ? user.authentication_token : null;
    }
  }
})();
