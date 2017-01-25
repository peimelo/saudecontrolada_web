(function() {
  'use strict';

  angular
    .module('app')
    .factory('ValoresResource', ValoresResource);

  /** @ngInject */
  function ValoresResource($resource) {
    return $resource('/api/exams/:exam_id/valores/:id',
      { id: '@id', exam_id: '@exam_id' },
      {
        query: { isArray: false },
        update: { method: 'PUT' }
      }
    );
  }
})();
