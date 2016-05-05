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
    vm.submit = submit;

    active();

    function active() {
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
