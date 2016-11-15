(function () {
  'use strict';

  angular
    .module('app')
    .filter('genderFilter', genderFilter);

  /** @ngInject */
  function genderFilter($filter) {
    return function(input) {
      if (input === 'F') {
        return $filter('translate')('FEMALE');
      }
      else if (input === 'M') {
        return $filter('translate')('MALE');
      }
      else {
        return "";
      }
    };
  }
})();
