(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($translateProvider) {
    $translateProvider
      .translations('en', {
        ADMIN: 'Administration',
        CHANGING: 'Changing',
        CONFIRMATION: 'Confirmation',
        DASHBOARD: 'Dashboard',
        DATE: 'Date',
        HEIGHT: 'Height',
        INCLUDE: 'Include',
        INCLUDING: 'Including',
        LOGOUT: 'Log out',
        NEXT: 'Next',
        NAME: 'Name',
        OPTIONS: 'Options',
        PREVIOUS: 'Previous',
        PROFILE: 'Profile',
        REFERENCES: 'References',
        UNITS: 'Units',
        USERS: 'Users',
        VALUE: 'Value',
        WEIGHTS: 'Weights'
      })
      .translations('pt-BR', {
        ADMIN: 'Administração',
        CHANGING: 'Alterando',
        CONFIRMATION: 'Confirmação',
        DASHBOARD: 'Painel',
        DATE: 'Data',
        HEIGHT: 'Altura',
        INCLUDE: 'Incluir',
        INCLUDING: 'Incluindo',
        LOGOUT: 'Sair',
        NAME: 'Nome',
        NEXT: 'Próximo',
        OPTIONS: 'Opções',
        PREVIOUS: 'Anterior',
        PROFILE: 'Perfil',
        REFERENCES: 'Referências',
        UNITS: 'Unidades',
        USERS: 'Usuários',
        VALUE: 'Valor',
        WEIGHTS: 'Pesos'
      });

    $translateProvider.preferredLanguage('pt-BR');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
  }
})();
