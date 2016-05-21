(function() {
  'use strict';

  angular
    .module('app')
    .controller('SessionController', SessionController);

  /** @ngInject */
  function SessionController(sessionService, $state) {
    var vm = this;

    vm.submit = submit;
    vm.user = {};

    activate();

    function activate() {
      if (sessionService.user()) {
        sessionService.logout();
      }
    }

    function submit() {
      sessionService.login(vm.user).then(
        function() {
          vm.user = {};
          $state.go('pesos');
        }
      );
    }
  }
})();
