(function() {
  'use strict';

  angular
    .module('app')
    .factory('ExamsGraphicsResource', ExamsGraphicsResource);

  /** @ngInject */
  function ExamsGraphicsResource($resource, baseUrl) {
    return $resource(baseUrl + '/exams_graphics/:id', { id: '@id' }, {
      query: { isArray: false }
    });
  }
})();
