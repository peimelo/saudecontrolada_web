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
      scope: {
        timeout: '@'
      },
      link: linkFunc
    };

    return directive;

    /** @ngInject */
    function linkFunc(scope) {
      scope.alertingService = alertingService;
      scope.dismiss = angular.isUndefined(scope.timeout) ?
        null : parseInt(scope.timeout);

      scope.closeAlert = function(index) {
        scope.getAlerts().splice(index, 1);
      };
    }
  }
})();
