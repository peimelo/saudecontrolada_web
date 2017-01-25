(function() {
  'use strict';

  angular
    .module('app')
    .factory('ExamsResource', ExamsResource);

  /** @ngInject */
  function ExamsResource($resource) {
    return $resource('/api/exams/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();
