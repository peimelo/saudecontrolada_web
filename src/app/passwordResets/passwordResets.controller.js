(function() {
  'use strict';

  angular
    .module('app')
    .controller('PasswordResetsController', PasswordResetsController);

  /** @ngInject */
  function PasswordResetsController(alertingService, PasswordResetsResource, $scope, $state, $stateParams) {
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

    function resetPassword() {
      var newPassword = new PasswordResetsResource({ user: vm.user });

      newPassword.$update(params, function(response) {
        alertingService.addSuccess(response.message);
        $state.go('login');
      }, function(error) {
        alertingService.addDanger(error.data.message);
      });
    }

    function forgot() {
      var newPassword = new PasswordResetsResource({
        password_reset: vm.user.email
      });

      newPassword.$save(function(response) {
        alertingService.addSuccess(response.message);
        $state.go('login');
      });
    }
  }
})();
