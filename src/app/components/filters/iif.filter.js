(function () {
  'use strict';

  angular
    .module('app')
    .filter('iif', iif);

  function iif() {
    return function(input, trueValue, falseValue) {
      return input ? trueValue : falseValue;
    };
  }
})();
