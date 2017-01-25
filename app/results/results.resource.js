(function() {
  'use strict';

  angular
    .module('app')
    .factory('ResultsResource', ResultsResource);

  /** @ngInject */
  function ResultsResource($resource) {
    return $resource('/api/results/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();
