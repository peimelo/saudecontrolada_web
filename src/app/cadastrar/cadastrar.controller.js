(function() {
  'use strict';

  angular
    .module('app')
    .controller('CadastrarController', CadastrarController);

  /** @ngInject */
  function CadastrarController(cadastrarService) {
    var vm = this;

    vm.login = login;
    vm.user = {};

    function login() {
      return cadastrarService.create(vm.user).then(function(data) {
        vm.user = {};
        toastr.success('Olá ' + data.user.name);
        $state.go('dashboard');
      });
    }
  }
})();
