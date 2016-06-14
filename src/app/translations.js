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
        DATE_BIRTH: 'Birthday',
        FEMALE: 'Female',
        GENDER: 'Gender',
        HEIGHT: 'Height',
        INCLUDE: 'Include',
        INCLUDING: 'Including',
        LOGOUT: 'Log out',
        MALE: 'Male',
        NEXT: 'Next',
        NAME: 'Name',
        OPTIONS: 'Options',
        PASSWORD: 'Password',
        PASSWORD_CONFIRMATION: 'Password confirmation',
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
        DATE_BIRTH: 'Data de nascimento',
        FEMALE: 'Feminino',
        GENDER: 'Sexo',
        HEIGHT: 'Altura',
        INCLUDE: 'Incluir',
        INCLUDING: 'Incluindo',
        LOGOUT: 'Sair',
        MALE: 'Masculino',
        NAME: 'Nome',
        NEXT: 'Próximo',
        OPTIONS: 'Opções',
        PASSWORD: 'Senha',
        PASSWORD_CONFIRMATION: 'Confirmar a senha',
        PASSWORD_CONFIRMATION_VALIDATOR: 'Esse campo deve ser igual a senha.',
        PASSWORD_INSTRUCTIONS: 'Mínimo de 8 caracteres (letras, números ou símbolos).',
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
