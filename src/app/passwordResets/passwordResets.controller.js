(function() {
  'use strict';

  angular
    .module('app')
    .controller('PasswordResetsController', PasswordResetsController);

  /** @ngInject */
  function PasswordResetsController(PasswordResetsResource, $state,
    $stateParams, toaster) {
    var vm = this;

    var params = null;

    vm.forgot = forgot;
    vm.resetPassword = resetPassword;
    vm.user = {};

    activate();

    function activate() {
      if ($state.is('passwordReset')) {
        params = { id: $stateParams.id, email: $stateParams.email };
      }
    }

    function forgot(form) {
      if (form.$valid) {
        var newPassword = new PasswordResetsResource({
          password_reset: vm.user
        });

        newPassword.$save(function(response) {
          $state.go('login');
          toaster.pop('success', '', response.message);
        });
      }
      else {
        toaster.pop('warning', '', 'Por favor, preencha o e-mail.');
        form.submitted = true;
      }
    }

    function resetPassword(form) {
      if (form.$valid) {
        var newPassword = new PasswordResetsResource({ user: vm.user });

        newPassword.$update(params, function(response) {
          $state.go('login');
          toaster.pop('success', '', response.message);
        });
      }
      else {
        form.submitted = true;
        toaster.pop('warning', '', 'Todos os campos devem estar preenchidos e validados.');
      }
    }
  }
})();
