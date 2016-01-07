(function() {
  'use strict';

  angular
    .module('app')
    .controller('CadastrarController', CadastrarController);

  /** @ngInject */
  function CadastrarController(cadastrarService) {
    var vm = this;

    vm.submitRegistration = submitRegistration;
    vm.registrationForm = {};

    function submitRegistration(registrationForm) {
      return cadastrarService.create(registrationForm).then(
        function(data) {
          vm.registrationForm = {};
          toastr.success('Olá ' + data.user.name);
          $state.go('dashboard');
        }
      );
    }
  }
})();
