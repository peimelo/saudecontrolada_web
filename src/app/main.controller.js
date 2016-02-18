(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(sessionService) {
    var vm = this;

    vm.sessionService = sessionService;
    vm.logout = logout;

    function logout() {
      return sessionService.logout();
    }

  }
})();
