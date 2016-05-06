(function() {
  'use strict';

  angular
    .module('app')
    .controller('PasswordResetsController', PasswordResetsController);

  /** @ngInject */
  function PasswordResetsController(PasswordResetsResource, $scope, $state, $stateParams) {
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

      // AccountActivationsService.get(data,
      //   function(response) {
      //     vm.alert = response;
      //   }, function(response) {
      //     vm.alert = response.data;
      //   }
      // );
    }

    function resetPassword() {
      var newPassword = new PasswordResetsResource({
        user: {
          password: vm.user.password,
          password_confirmation: vm.user.password_confirmation
        }
      });

      newPassword.$update(params, function(response) {
        $scope.main.alerts.push({
          type: 'info',
          msg: response.info
        });

        $state.go('login');
      });
    }

    function forgot() {
      var newPassword = new PasswordResetsResource({
        password_reset: {email: vm.user.email}
      });

      newPassword.$save(function(response) {
        $scope.main.alerts.push({
          type: 'info',
          msg: response.info
        });

        $state.go('login');
      });
    }
  }
})();
