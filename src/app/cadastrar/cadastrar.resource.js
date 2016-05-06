(function() {
  'use strict';

  angular
    .module('app')
    .factory('cadastrarService', cadastrarService);

  /** @ngInject */
  function cadastrarService($http) {
    var api = '/api/users/';

    var service = {
      user: null,
      create: create
    };

    return service;

    function create(user) {
      return $http.post(api, {
        user: {
          date_of_birth: user.date_of_birth,
          email: user.email,
          gender: user.gender,
          name: user.name,
          password: user.password,
          password_confirmation: user.password_confirmation
        }
      }).then(getComplete);

      function getComplete(response) {
        service.user = response.data.user;
        return response.data;
      }
    }
  }
})();
