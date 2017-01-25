(function() {
  'use strict';

  angular
    .module('app')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(UsersResource) {
    var vm = this;

    vm.pagination = { currentPage: 1 };
    vm.query = query;
    vm.users = [];

    active();

    function active() {
      query();
    }

    function query() {
      UsersResource.query({ page: vm.pagination.currentPage },
        function(response) {
          vm.users = response.users;
          vm.pagination = response.meta;
        }
      );
    }

  }
})();
