(function() {
  'use strict';

  angular
    .module('app')
    .factory('ResultsResource', ResultsResource);

  /** @ngInject */
  function ResultsResource($resource, baseUrl) {
    return $resource(baseUrl + '/results/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();
