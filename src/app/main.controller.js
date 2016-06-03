(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(sessionService, $state) {
    var vm = this;

    vm.alerts = [];
    vm.closeAlert = closeAlert;
    vm.logout = logout;
    vm.sessionService = sessionService;

    function closeAlert(index) {
      vm.alerts.splice(index, 1);
    }

    function logout() {
      sessionService.logout().then(function() {
        $state.go('home');
      });
    }
  }
})();
