(function() {
  'use strict';

  angular
    .module('app')
    .controller('SessionController', SessionController);

  /** @ngInject */
  function SessionController(formErrorService, $rootScope,
    serverValidateService, sessionService, $state) {
    var vm = this;

    vm.formErrors = {};
    vm.submit = submit;
    vm.user = {};

    activate();

    function activate() {
      if ($rootScope.authenticationToken && sessionService.user) {
        $state.go('dashboard');
      }
    }

    function submit(form) {
      if (form.$valid) {
        vm.formErrors = {};

        sessionService.login(vm.user).then(
          function() {
            vm.user = {};
            $state.go('dashboard');
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
