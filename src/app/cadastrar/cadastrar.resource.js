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
      create: create,
      hasAttributes: hasAttributes
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

    function hasAttributes(obj) {
      for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
          return true;
        }
      }
      return false;
    }
  }
})();
