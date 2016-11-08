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
        title: 'Responsivo',
        text: 'Significa que você pode acessar do seu computador, tablet ou celular.'
      },
      {
        title: 'Controle de Peso',
        text: 'Controle a evolução do seu peso, o peso ideal e o IMC.'
      },
      {
        title: 'Resultados de Exames',
        text: 'Todos os seus resultados em um só lugar e com gráficos.'
      },
      {
        title: 'Gratuito',
        text: 'Você não precisa pagar nada. Queremos ajudar você a cuidar da sua saúde.'
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
