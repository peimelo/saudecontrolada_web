(function() {
  'use strict';

  angular
    .module('app')
    .factory('DashboardsResource', DashboardsResource);

  /** @ngInject */
  function DashboardsResource($resource, baseUrl) {
    return $resource(baseUrl + '/dashboards/:id', { id: '@id' }, {
      query: { isArray: false }
    });
  }
})();
