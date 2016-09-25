(function() {
  'use strict';

  angular
    .module('app')
    .factory('ExamsResultsResource', ExamsResultsResource);

  /** @ngInject */
  function ExamsResultsResource($resource) {
    return $resource('/api/results/:result_id/exams_results/:id',
      { id: '@id', result_id: '@result_id' },
      {
        query: { isArray: false },
        update: { method: 'PUT' }
      }
    );
  }
})();
