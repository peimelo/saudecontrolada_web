(function () {
  'use strict';

  angular
    .module('app')
    .filter('formatDateTime', formatDateTime);

  function formatDateTime(moment) {
    return function(input) {
      return input ?
        moment(input, 'YYYY-MM-DD HH:mm').format('DD/MM/YYYY HH:mm') : input;
    };
  }
})();
