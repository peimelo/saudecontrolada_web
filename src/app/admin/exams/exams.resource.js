(function() {
  'use strict';

  angular
    .module('app')
    .factory('ExamsResource', ExamsResource);

  /** @ngInject */
  function ExamsResource($resource, baseUrl) {
    return $resource(baseUrl + '/exams/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();
