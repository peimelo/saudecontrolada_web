(function () {
  'use strict';

  angular
    .module('app')
    .filter('trueFalseFilter', trueFalseFilter);

  /** @ngInject */
  function trueFalseFilter() {
    return function(input) {
      if(input) {
        return "<i class='fa fa-check'></i>";
      }
      else {
        return "";
      }
    };
  }
})();
