(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserEditController', UserEditController);

  /** @ngInject */
  function UserEditController(formErrorService, localStorageService,
    serverValidateService, sessionService, $state, SweetAlert, toaster, 
    USERKEY, UsersResource) {
    var vm = this;

    vm.cancel = cancel;
    vm.cancelAccount = cancelAccount;
    vm.formErrors = {};
    vm.submit = submit;
    vm.unhappy = false;
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

      delete vm.user['admin'];
      localStorageService.add(USERKEY, vm.user)
    }

    function cancel(form) {
      vm.user = angular.copy(sessionService.user);
      form.submitted = false;
    }

    function cancelAccount() {
      if (vm.unhappy) {
        UsersResource.delete({ id: 0 },
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
  }
})();
