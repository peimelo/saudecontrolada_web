(function() {
  'use strict';

  angular
    .module('app')
    .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        title: 'É gratuito',
        description: 'Você nunca precisará pagar nada!',
        icon: 'money'
      },
      {
        title: 'É Responsivo',
        description: 'Significa que você pode acessar do seu computador, tablet ou celular.',
        icon: 'mobile'
      },
      {
        title: 'Resultados de Exames',
        description: 'Todos os seus resultados em um só lugar e com gráficos.',
        icon: 'line-chart'
      },
      {
        title: 'Código Open Source',
        description: 'Código fonte disponível para quem puder contribuir.',
        icon: 'github',
        'url': 'http://github.com/peimelo/saudecontrolada'
      },
      {
        title: 'Dashboard',
        description: 'Painel mostrando os dados importantes para você ficar atento.',
        icon: 'dashboard'
      },
      {
        title: 'Controle de Peso',
        description: 'Controle a evolução do seu peso, o peso ideal e o IMC.',
        icon: 'balance-scale'
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }
})();
