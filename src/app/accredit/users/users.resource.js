(function () {
  'use strict';

  angular
    .module('app')
    .factory('UsersResource', UsersResource);

  /** @ngInject */
  function UsersResource($resource, baseUrl) {
    return $resource(
      baseUrl + '/users/:id', { id: '@id' }, {
        query: { isArray: false },
        update: {method: 'PUT'}
      }
    );
  }
})();
