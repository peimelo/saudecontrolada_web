(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(sessionService) {
    var vm = this;

    vm.alerts = [];
    vm.closeAlert = closeAlert;
    vm.logout = logout;
    vm.sessionService = sessionService;

    function closeAlert(index) {
      vm.alerts.splice(index, 1);
    }

    function logout() {
      return sessionService.logout();
    }

  }
})();
