(function() {
  'use strict';

  angular
    .module('app')
    .controller('SessionController', SessionController);

  /** @ngInject */
  function SessionController(sessionService, $state) {
    var vm = this;

    vm.error = '';
    vm.login = login;
    vm.title = 'Entrar';
    vm.user = {};

    activate();

    function activate() {
      if (sessionService.user) {
        sessionService.logout();
      }
    }

    function login() {
      vm.error = '';

      return sessionService.login(vm.user).then(
        function() {
          vm.user = {};
          $state.go('dashboard');
        },
        function(error) {
          vm.error = error.data.message;
        }
      );
    }
  }
})();
