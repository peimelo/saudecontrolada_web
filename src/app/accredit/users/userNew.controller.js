(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserNewController', UserNewController);

  /** @ngInject */
  function UserNewController($state, SweetAlert, toaster, UsersResource) {
    var vm = this;

    vm.clearServerError = clearServerError;
    vm.formErrors = {};
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
            form.submitted = true;
            if (error.status === 422) {
              angular.forEach(error.data, function (errors, field) {
                form[field].$setValidity('server', false);
                vm.formErrors[field] = errors.join(', ');
              });
            }
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
