(function() {
  'use strict';

  angular
    .module('app')
    .factory('usersService', usersService);

  /** @ngInject */
  function usersService($resource) {
    return $resource('/api/users/:id', { id: '@id' }, {
      update: { method: 'PUT' }
    });
  }
})();
