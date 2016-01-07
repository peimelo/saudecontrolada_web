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
      return cadastrarService.create(vm.user).then(function() {
        vm.user = {};
        //$state.go('dashboard');
      });
    }
  }
})();
