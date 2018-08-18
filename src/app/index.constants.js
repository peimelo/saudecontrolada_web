/* global moment:false */
(function() {
  'use strict';

  // .constant('baseUrl', 'http://127.0.0.1:3000/api')
  // .constant('baseUrl', 'https://saudecontrolada.com.br/api')

  angular
    .module('app')
    .constant('baseUrl', 'http://127.0.0.1:3000/api')
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
