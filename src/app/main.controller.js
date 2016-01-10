(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(loginService) {
    var vm = this;

    vm.loginService = loginService;
    vm.logout = logout;

    function logout() {
      return loginService.logout();
    }

  }
})();
