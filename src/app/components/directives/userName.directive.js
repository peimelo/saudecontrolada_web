(function() {
  'use strict';

  angular
    .module('app')
    .directive('userName', userName);

  /** @ngInject */
  function userName(sessionService) {
    var directive = {
      restrict: 'E',
      template: '<strong class="font-bold">{{user}}</strong>',
      scope: true,
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope) {
      scope.user = sessionService.user().name;
    }
  }
})();
