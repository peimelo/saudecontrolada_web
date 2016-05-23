(function() {
  'use strict';

  angular
    .module('app')
    .directive('scLogout', scLogout);

  /** @ngInject */
  function scLogout() {
    var directive = {
      restrict: 'E',
      transclude: true,
      replace: true,
      template: '<a href="#" ng-click="vm.logout()"><i class="fa fa-sign-out"></i> {{vm.sair}}',
      scope: true,
      link: linkFunc,
      controller: LogoutController,
      controllerAs: 'vm'
    };

    return directive;

    function linkFunc(scope) {
      scope.sair = 'pppppp';
    }

    /** @ngInject */
    function LogoutController(sessionService) {
      var vm = this;

      vm.sair = 'ooooo';
//{{ "LOGOUT" | translate }}
      vm.logout = logout;

      function logout() {
        sessionService.logout();
      }
    }
  }
})();
