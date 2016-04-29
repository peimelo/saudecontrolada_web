(function() {
  'use strict';

  angular
    .module('app')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController(usersService) {
    var vm = this;

    vm.title = 'Usuários';
    vm.users = [];

    active();

    function active() {
      usersService.query(
        function(response) {
          vm.users = response;
        }
      );
    }
  }
})();
