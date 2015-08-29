(function() {
  'use strict';

  angular
    .module('app')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController(loginService) {
    var vm = this;

    vm.nome = loginService.user.name;
  }
})();
