/* global moment:false */
(function() {
  'use strict';

  angular
    .module('app')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('uibPaginationConfig', {
      boundaryLinks: true,
      firstText: 'Primeiro',
      previousText: 'Anterior',
      nextText: 'Próximo',
      lastText: 'Último',
      rotate: false
    });
})();
