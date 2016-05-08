(function() {
  'use strict';

  angular
    .module('app')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(UsersResource) {
    var vm = this;

    vm.title = 'Usuários';
    vm.users = [];

    active();

    function active() {
      UsersResource.query(
        function(response) {
          vm.users = response;
        }
      );
    }
  }
})();
