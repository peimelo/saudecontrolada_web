(function() {
  'use strict';

  angular
    .module('app')
    .factory('ExamsResultsResource', ExamsResultsResource);

  /** @ngInject */
  function ExamsResultsResource($resource) {
    return $resource('/api/exams_results/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();
