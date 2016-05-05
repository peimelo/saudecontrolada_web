(function() {
  'use strict';

  angular
    .module('app')
    .controller('PasswordResetsController', PasswordResetsController);

  /** @ngInject */
  function PasswordResetsController(PasswordResetsResource) {
    var vm = this;

    vm.msg = '';
    vm.forgot = {};
    vm.resetPassword = resetPassword;
    vm.submit = submit;

    function resetPassword() {
    }

    function submit() {
      vm.msg = '';

      var newPassword = new PasswordResetsResource({
        password_reset: {email: vm.forgot.email}
      });

      newPassword.$save(function(response) {
        vm.msg = response.info;
      });
    }
  }
})();
