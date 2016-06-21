(function() {
  'use strict';

  angular
    .module('app')
    .controller('PasswordResetsController', PasswordResetsController);

  /** @ngInject */
  function PasswordResetsController(PasswordResetsResource,
    serverValidateService, $state, $stateParams, SweetAlert, toaster) {
    var vm = this;

    var params = null;

    vm.forgot = forgot;
    vm.formErrors = {};
    vm.resetPassword = resetPassword;
    vm.user = {};

    activate();

    function activate() {
      if ($state.is('accredit.passwordReset')) {
        params = { id: $stateParams.id, email: $stateParams.email };
      }
    }

    function forgot(form) {
      if (form.$valid) {
        var newPassword = new PasswordResetsResource(vm.user);

        newPassword.$save(function(response) {
          $state.go('accredit.login');

          SweetAlert.swal({
            text: response.message,
            title: response.title,
            type: "success"
          });
        });
      }
      else {
        toaster.pop('warning', '', 'Por favor, preencha o e-mail.');
        form.submitted = true;
      }
    }

    function resetPassword(form) {
      if (form.$valid) {
        var newPassword = new PasswordResetsResource(vm.user);

        newPassword.$update(params,
          function(response) {
            $state.go('accredit.login');
  
            SweetAlert.swal({
              text: response.message,
              title: response.title,
              type: "success"
            });
          },
          function(error) {
            serverValidateService.validate(error, vm.formErrors, form);
          }
        );
      }
      else {
        form.submitted = true;
        toaster.pop('warning', '', 'Todos os campos devem estar preenchidos e validados.');
      }
    }
  }
})();
