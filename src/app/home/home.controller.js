(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(sessionService, $state) {
    activate();

    function activate() {
      // if (sessionService.user) {
      //   $state.go('dashboard');
      // }
    }
  }
})();
