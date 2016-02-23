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
          email: user.email,
          password: user.password,
          name: user.name,
          gender: user.gender,
          date_of_birth: user.date_of_birth
        }
      })
        .then(getComplete);
        //.catch(getFailed);

      function getComplete(response) {
        service.user = response.data.user;
        return response.data;
      }

      //function getFailed(response) {
      //  angular.forEach(response.data, function(errors, key) {
      //    angular.forEach(errors, function(e) {
      //      $scope.form[key].$dirty = true;
      //      $scope.form[key].$setValidity(e, false);
      //    });
      //  });
      //}
    }

  }
})();
