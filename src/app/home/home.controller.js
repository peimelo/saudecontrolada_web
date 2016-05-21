(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($rootScope, $state) {
    activate();

    function activate() {
      if($rootScope.user) {
        $state.go('dashboard');
      }
    }
  }
})();
