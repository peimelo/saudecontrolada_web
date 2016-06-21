(function() {
  'use strict';

  angular
    .module('app')
    .directive('alerts', alerts);

  /** @ngInject */
  function alerts(alertingService) {
    var directive = {
      restrict: 'AE',
      templateUrl: 'app/components/directives/alerting/alerts.html',
      scope: true,
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope) {
      scope.currentAlerts = alertingService.currentAlerts;

      scope.closeAlert = function(index) {
        scope.currentAlerts.splice(index, 1);
      };
    }
  }
})();
