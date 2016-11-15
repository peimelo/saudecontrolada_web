(function () {
  'use strict';

  angular
    .module('app')
    .filter('iif', iif);

  /** @ngInject */
  function iif() {
    return function(input, trueValue, falseValue) {
      return input ? trueValue : falseValue;
    };
  }
})();
