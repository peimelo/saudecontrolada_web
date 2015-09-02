(function() {
  'use strict';

  angular
    .module('app')
    .factory('pesosService', pesosService);

  /** @ngInject */
  function pesosService($resource, loginService) {
    return $resource('/api/pesos/:id', { id: '@id' }, {
      query: {
        headers: { 'Authorization': loginService.user.authentication_token }
      },
      update: {
        method: 'PUT'
      }
    });
  }
})();
