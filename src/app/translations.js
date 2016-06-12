(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($translateProvider) {
    $translateProvider
      .translations('en', {
        ACTIONS: 'Actions',
        ADMIN: 'Administration',
        APP: 'Saúde Controlada',
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
        SEND: 'Send',
        UNITS: 'Units',
        USERS: 'Users',
        VALUE: 'Value',
        WEIGHTS: 'Weights'
      })
      .translations('pt-BR', {
        ACTIONS: 'Ações',
        ADMIN: 'Administração',
        APP: 'Saúde Controlada',
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
        SEND: 'Enviar',
        UNITS: 'Unidades',
        USERS: 'Usuários',
        VALUE: 'Valor',
        WEIGHTS: 'Pesos',

        // links.html
        LINKS_ACTIVATION: 'Não recebeu instruções de ativação?',
        LINKS_CREATE_ACCOUNT: 'Criar uma conta',
        LINKS_FORGOT: 'Esqueceu a senha?',
        LINKS_HAVE_ACCOUNT: 'Já tem uma conta?',
        LINKS_HOME: 'Voltar para a página inicial',
        LINKS_NOT_HAVE_ACCOUNT: 'Não tem uma conta?',
        LINKS_SIGNIN: 'Entrar'
      });

    $translateProvider.preferredLanguage('pt-BR');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
  }
})();
