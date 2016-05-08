(function () {
  'use strict';

  angular
    .module('app')
    .factory('UsersResource', UsersResource);

  /** @ngInject */
  function UsersResource($resource) {
    return $resource(
      '/api/users/:id', {id: '@id'}, {
        // get: {
        //   method: 'GET',
        //   transformResponse: function (data, headers) {
        //
        //     data = angular.fromJson(data);
        //     // data.teste = new Date(data.teste);
        //     // data.teste.setHours(data.getHours() + 12);
        //     return data;
        //     //MESS WITH THE DATA
        //     // data = {};
        //     // data.coolThing = 'BOOM-SHAKA-LAKA';
        //     // return data;
        //   }
        // },
        update: {method: 'PUT'}
      }
    );
  }
})();
