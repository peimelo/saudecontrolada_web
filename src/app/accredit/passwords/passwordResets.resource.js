(function() {
  'use strict';

  angular
    .module('app')
    .factory('PasswordResetsResource', PasswordResetsResource);

  /** @ngInject */
  function PasswordResetsResource($resource) {
    return $resource('/api/passwords/:id', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();
