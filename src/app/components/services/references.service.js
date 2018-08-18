(function() {
  'use strict';

  angular
    .module('app')
    .factory('referencesService', referencesService);

  /** @ngInject */
  function referencesService($http, baseUrl) {
    var references = [];

    return {
      clearReferences: clearReferences,
      // getReference: getReference,
      getAll: getAll
    };

    function clearReferences() {
      references = [];
    }

    function getAll() {
      if (references.length) {
        return references;
      }
      else {
        return $http.get(baseUrl + '/references').then(
          function(response) {
            references = response.data.references;
            return response.data.references;
          }
        );
      }
    }

    function getReference(id) {
      return $http.get(baseUrl + '/references/' + id).then(
        function(response) {
          return response.data;
        }
      );
    }
  }
})();
