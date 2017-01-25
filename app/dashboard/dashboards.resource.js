(function() {
  'use strict';

  angular
    .module('app')
    .factory('DashboardsResource', DashboardsResource);

  /** @ngInject */
  function DashboardsResource($resource) {
    return $resource('/api/dashboards/:id', { id: '@id' }, {
      query: { isArray: false }
    });
  }
})();
