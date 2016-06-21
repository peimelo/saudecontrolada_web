(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserNewController', UserNewController);

  /** @ngInject */
  function UserNewController($sce, serverValidateService, $state, SweetAlert, toaster, UsersResource, $scope) {
    var vm = this;

    vm.clearServerError = clearServerError;
    vm.formErrors = {};
    vm.passwordRules = $sce.trustAsHtml(
      'Para sua segurança, a senha deve ter no mínimo 8 caracteres com pelo menos: <br />\
      <ul> \
        <li>1 letra maiúscula,</li> \
        <li>1 letra minúscula,</li> \
        <li>1 número,</li> \
        <li>e 1 símbolo.</li>\
      </ul>\
      Símbolos incluem: <br />\
      `~!@#$%^&*()-_=+[]{}\\|;:\'",.<>/?'
    );
    vm.tooltipIsOpen = false;
    vm.user = {};
    vm.submit = submit;

    function clearServerError(form, key) {
      if(form[key].$error.server) {
        form[key].$setValidity('server', true);
      }
    }

    function submit(form) {
      if (form.$valid) {
        vm.formErrors = {};

        UsersResource.save({ user: vm.user },
          function(response) {
            vm.user = {};
            $state.go('accredit.login');

            SweetAlert.swal({
              title: response.title,
              text: response.message,
              type: "success"
            });
          },
          function(error) {
            serverValidateService.validate(error, vm.formErrors, form);
            // vm.serverErrors = error.data;
            // $scope.serverErrors = error.data;
            // form.submitted = true;
            // if (error.status === 422) {
            //   angular.forEach(error.data, function (errors, field) {
            //     form[field].$setValidity('server', false);
            //     vm.formErrors[field] = errors.join(', ');
            //   });
            //   $scope.serverErrors = error.data;

            // }
          }
        );
      }
      else {
        toaster.pop('warning', '', 'Todos os campos devem estar preenchidos e validados.');
        form.submitted = true;
      }
    }
  }
})();
