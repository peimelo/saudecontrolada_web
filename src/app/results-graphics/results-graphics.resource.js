(function() {
  'use strict';

  angular
    .module('app')
    .factory('ResultsGraphicsResource', ResultsGraphicsResource);

  /** @ngInject */
  function ResultsGraphicsResource($resource) {
    return $resource('/api/results_graphics/:id', { id: '@id' }, {
      query: { isArray: false }
    });
  }
})();
