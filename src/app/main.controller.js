(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(loginService, $state) {
    var vm = this;

    vm.login = loginService;
    vm.logout = logout;

    activate();

    function activate() {
    }

    function logout() {
      $state.go('home');
      return loginService.logout();
    }

  }
})();
