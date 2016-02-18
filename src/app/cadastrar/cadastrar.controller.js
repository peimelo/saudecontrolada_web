(function() {
  'use strict';

  angular
    .module('app')
    .controller('CadastrarController', CadastrarController);

  /** @ngInject */
  function CadastrarController(cadastrarService, $state) {
    var vm = this;

    vm.registrationForm = {};
    vm.submit = submit;
    vm.title = 'Cadastrar-se';

    function submit() {
      return cadastrarService.create(vm.registrationForm).then(function() {
        vm.registrationForm = {};
        $state.go('login');
      });
    }
  }
})();
