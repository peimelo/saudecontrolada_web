(function() {
  'use strict';

  angular
    .module('app')
    .factory('ContactsResource', ContactsResource);

  /** @ngInject */
  function ContactsResource($resource) {
    return $resource('/api/contacts/:id', { id: '@id' }, {
      query: { isArray: false },
      update: { method: 'PUT' }
    });
  }
})();
