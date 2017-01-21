(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;

    vm.presentations = [
      {
        title: 'Gratuito',
        text: 'Você não precisa pagar nada. Queremos ajudar você a cuidar da sua saúde.'
      },
      {
        title: 'Responsivo',
        text: 'Significa que você pode acessar do seu computador, tablet ou celular.'
      }
    ];

    vm.slides = [
      {
        id: 1,
        text: 'Para ajudá-lo a cuidar da saúde.',
        class: 'header-back two'
      }
    ];
  }
})();
