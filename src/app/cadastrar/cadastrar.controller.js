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
    vm.user = {};
    vm.submit = submit;
    vm.title = 'Cadastrar-se';

    function clearServerError(form, key) {
      if(form[key].$error.server) {
        form[key].$setValidity('server', true);
      }
    }

    function submit(isValid) {
      if (isValid) {
        vm.errors = {};

        return cadastrarService.create(vm.user).then(
          function () {
            vm.user = {};
            $state.go('home');
          },
          function (response) {
            angular.forEach(response.data, function (errors, field) {
              form[field].$setValidity('server', false);
              vm.errors[field] = errors.join(', ');
            });
          }
        );
      }
      else {
        toastr.warning('Todos os campos devem estar preenchidos.')
      }
    }
  }
})();
