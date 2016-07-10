(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserNewController', UserNewController);

  /** @ngInject */
  function UserNewController(formErrorService, serverValidateService,
    $state, SweetAlert, UsersResource) {
    var vm = this;

    vm.clearServerError = clearServerError;
    vm.formErrors = {};
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
          }
        );
      }
      else {
        formErrorService.showMessage(form);
      }
    }
  }
})();
