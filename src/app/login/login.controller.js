(function() {
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(loginService, $state) {
    var vm = this;

    vm.error = '';
    vm.login = login;
    vm.user = {};

    function login() {
      vm.error = '';

      return loginService.login(vm.user).then(
        function(data) {
          vm.user = {};
          toastr.success('Olá ' + loginService.user.name);
          $state.go('dashboard');
        },
        function(error) {
          vm.error = error.data.error;
        }
      );
    }
  }
})();
