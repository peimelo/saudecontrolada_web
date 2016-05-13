(function () {
  'use strict';

  angular
    .module('app')
    .filter('startFromFilter', startFromFilter);

  /** @ngInject */
  function startFromFilter() {
    return function (input, start) {
      if (input) {
        start = +start;
        return input.slice(start);
      }
      return [];
    };
  }
})();
