(function() {
  'use strict';

  angular
    .module('app.home')
    .component('home', {
      controller: HomeController,
      templateUrl: 'app/home/home.template.html'
    });

  /** @ngInject */
  function HomeController() {
    var ctrl = this;

    ctrl.presentations = [
      {
        title: 'Gratuito',
        text: 'Você não precisa pagar nada. Queremos ajudar você a cuidar da sua saúde.'
      },
      {
        title: 'Responsivo',
        text: 'Significa que você pode acessar do seu computador, tablet ou celular.'
      }
    ];

    ctrl.slides = [
      {
        id: 1,
        text: 'Para ajudá-lo a cuidar da saúde.',
        class: 'header-back two'
      }
    ];
  }
})();
