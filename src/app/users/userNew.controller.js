(function() {
  'use strict';

  angular
    .module('app')
    .controller('UserNewController', UserNewController);

  /** @ngInject */
  function UserNewController(alertingService, $scope, $state, toastr, UsersResource) {
    var vm = this;

    vm.clearServerError = clearServerError;
    vm.formErrors = {};
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
        vm.formErrors = {};

        UsersResource.save({user: vm.user}, function(response) {
          vm.user = {};
          alertingService.addSuccess(response.message);
          $state.go('home');
        },
        function(error) {
          if (error.status === 422) {
            angular.forEach(error.data, function (errors, field) {
              form[field].$setValidity('server', false);
              vm.formErrors[field] = errors.join(', ');
            });
          }
        });
      }
      else {
        toastr.warning('Todos os campos devem estar preenchidos e validados.');
      }
    }
  }
})();
