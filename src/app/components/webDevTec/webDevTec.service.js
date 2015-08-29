(function() {
  'use strict';

  angular
    .module('app')
    .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [
      {
        'title': 'É gratuito',
        'description': 'Você nunca precisará pagar nada!',
        'icon': 'money'
      },
      {
        'title': 'É Responsivo',
        'description': 'Significa que você pode acessar do seu computador, tablet ou celular.',
        'icon': 'mobile'
      },
      {
        'title': 'Resultados de Exames',
        'description': 'Todos os seus resultados em um só lugar e com gráficos.',
        'icon': 'line-chart'
      },
      {
        'title': 'Código Open Source',
        'description': 'Código fonte disponível para quem puder contribuir.',
        'icon': 'github',
        'url': 'http://github.com/peimelo/saudecontrolada'
      },
      {
        'title': 'Dashboard',
        'description': 'Painel mostrando os dados importantes para você ficar atento.',
        'icon': 'dashboard'
      },
      {
        'title': 'Controle de Peso',
        'description': 'Controle a evolução do seu peso, o peso ideal e o IMC.',
        'icon': 'balance-scale'
      }
      //{
      //  'title': 'AngularJS',
      //  'url': 'https://angularjs.org/',
      //  'description': 'HTML enhanced for web apps!',
      //  'logo': 'angular.png'
      //},
      //{
      //  'title': 'BrowserSync',
      //  'url': 'http://browsersync.io/',
      //  'description': 'Time-saving synchronised browser testing.',
      //  'logo': 'browsersync.png'
      //},
      //{
      //  'title': 'GulpJS',
      //  'url': 'http://gulpjs.com/',
      //  'description': 'The streaming build system.',
      //  'logo': 'gulp.png'
      //},
      //{
      //  'title': 'Jasmine',
      //  'url': 'http://jasmine.github.io/',
      //  'description': 'Behavior-Driven JavaScript.',
      //  'logo': 'jasmine.png'
      //},
      //{
      //  'title': 'Karma',
      //  'url': 'http://karma-runner.github.io/',
      //  'description': 'Spectacular Test Runner for JavaScript.',
      //  'logo': 'karma.png'
      //},
      //{
      //  'title': 'Protractor',
      //  'url': 'https://github.com/angular/protractor',
      //  'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
      //  'logo': 'protractor.png'
      //},
      //{
      //  'title': 'Bootstrap',
      //  'url': 'http://getbootstrap.com/',
      //  'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
      //  'logo': 'bootstrap.png'
      //},
      //{
      //  'title': 'Angular UI Bootstrap',
      //  'url': 'http://angular-ui.github.io/bootstrap/',
      //  'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
      //  'logo': 'ui-bootstrap.png'
      //}
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
