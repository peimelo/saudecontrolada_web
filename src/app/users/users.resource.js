(function () {
  'use strict';

  angular
    .module('app')
    .factory('UsersResource', UsersResource);

  /** @ngInject */
  function UsersResource($resource) {
    return $resource(
      '/api/users/:id', { id: '@id' }, {
        query: { isArray: false },
        update: {method: 'PUT'}
      }
    );
  }
})();
