(function() {
  'use strict';

  angular
    .module('app')
    .controller('CadastrarController', CadastrarController);

  /** @ngInject */
  function CadastrarController(cadastrarService, $state) {
    var vm = this;

    vm.clearServerError = clearServerError;
    vm.errors = {};
    vm.info = 'Campos com * (asterisco) são de preenchimento obrigatório.';
    vm.registrationForm = {};
    vm.submit = submit;
    vm.title = 'Cadastrar-se';

    function clearServerError(form, key) {
      if(form[key].$error.server) {
        form[key].$setValidity('server', true);
      }
    }

    function submit(form) {
      vm.errors = {};

      return cadastrarService.create(vm.registrationForm).then(
        function() {
          vm.registrationForm = {};
          $state.go('home');
        },
        function(response) {
          angular.forEach(response.data, function(errors, field) {
            form[field].$setValidity('server', false);
            vm.errors[field] = errors.join(', ');
          });
        }
      );
    }
  }
})();
