(function() {
  'use strict';

  angular
    .module('app')
    .controller('CadastrarController', CadastrarController);

  /** @ngInject */
  function CadastrarController(cadastrarService, $scope, $state, toastr) {
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

    function submit(form) {
      if (form.$valid) {
        vm.errors = {};

        cadastrarService.create(vm.user).then(
          function () {
            vm.user = {};
            $scope.main.alerts.push({
              type: 'success',
              msg: 'Por favor, verifique seu e-mail para ativar sua conta.'
            });
            $state.go('home');
          },
          function (response) {
            if (response.status === 422) {
              angular.forEach(response.data, function (errors, field) {
                form[field].$setValidity('server', false);
                vm.errors[field] = errors.join(', ');
              });
            }
          }
        );
      }
      else {
        toastr.warning('Todos os campos devem estar preenchidos e validados.');
      }
    }
  }
})();
