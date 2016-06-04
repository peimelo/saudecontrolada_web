(function () {
  'use strict';

  angular
    .module('app')
    .filter('timeAgoFilter', timeAgoFilter);

  /** @ngInject */
  function timeAgoFilter(moment) {
    return function(input) {
      if(input) {
        return moment(input).fromNow();
      }
    };
  }
})();
