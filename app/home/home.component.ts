(function() {
  'use strict';

  class HomeController {
    presentations: any[];
    slides: any[];

    constructor() {
      this.presentations = [
        {
          title: 'Gratuito',
          text: 'Você não precisa pagar nada. Queremos ajudar você a cuidar da sua saúde.'
        },
        {
          title: 'Responsivo',
          text: 'Significa que você pode acessar do seu computador, tablet ou celular.'
        }
      ];

      this.slides = [
        {
          id: 1,
          text: 'Para ajudá-lo a cuidar da saúde.',
          class: 'header-back two'
        }
      ];
    }
  }

  angular
    .module('app')
    .component('home', {
      controller: HomeController,
      templateUrl: 'app/home/home.template.html'
    });
})();
