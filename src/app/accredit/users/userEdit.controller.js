(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserEditController', UserEditController);

  /** @ngInject */
  function UserEditController(formErrorService, serverValidateService,
    sessionService, $state, SweetAlert, toaster, UsersResource) {
    var vm = this;

    vm.cancel = cancel;
    vm.destroy = destroy;
    vm.destroy_account_password = '';
    vm.formErrors = {};
    vm.submit = submit;
    vm.unhappy = false;
    vm.unhappyChange = unhappyChange;
    vm.user = sessionService.user;

    activate();

    function activate() {
      UsersResource.get({ id: 0 },
        function(response) {
          assignUser(response);
        }
      );
    }

    function assignUser(user) {
      vm.user = user;
      sessionService.user = angular.copy(user);
    }

    function cancel(form) {
      vm.user = angular.copy(sessionService.user);
      form.submitted = false;
    }

    function destroy(form) {
      if (form.$valid) {
        vm.formErrors = {};

        if (vm.unhappy) {
          UsersResource.delete({ id: 0, current_password: vm.destroy_account_password },
            function (response) {
              sessionService.logout();
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
      }
      else {
        formErrorService.showMessage(form);
      }
    }

    function submit(form) {
      if (form.$valid) {
        vm.formErrors = {};

        UsersResource.update({ id: 0, user: vm.user },
          function(response) {
            assignUser(response.user);
            form.submitted = false;
            toaster.pop('success', 'Usuário', response.meta);
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

    function unhappyChange(form) {
      if (!vm.unhappy) {
        form.submitted = false;
        vm.destroy_account_password = '';
      }
    }
  }
})();
