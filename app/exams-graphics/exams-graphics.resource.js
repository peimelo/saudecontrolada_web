(function() {
  'use strict';

  angular
    .module('app')
    .factory('ExamsGraphicsResource', ExamsGraphicsResource);

  /** @ngInject */
  function ExamsGraphicsResource($resource) {
    return $resource('/api/exams_graphics/:id', { id: '@id' }, {
      query: { isArray: false }
    });
  }
})();
