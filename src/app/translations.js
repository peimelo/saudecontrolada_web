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
        NAME: 'Name',
        NEXT: 'Next',
        NEW_PASSWORD: 'New password',
        OPTIONS: 'Options',
        PASSWORD: 'Password',
        PASSWORD_CONFIRMATION: 'Password confirmation',
        PASSWORD_CONFIRMATION_VALIDATOR: 'This field must match the password.',
        PREVIOUS: 'Previous',
        PROFILE: 'Profile',
        REFERENCES: 'References',
        RESULTS: 'Results',
        SEND: 'Send',
        UNITS: 'Units',
        USERS: 'Users',
        VALUE: 'Value',
        WEIGHTS: 'Weights',

        // links.html
        LINKS_ACTIVATION: 'Did not receive confirmation instructions?',
        LINKS_CREATE_ACCOUNT: 'Create an account',
        LINKS_FORGOT: 'Forgot password?',
        LINKS_HAVE_ACCOUNT: 'Already have an account?',
        LINKS_HOME: 'Back to the home page',
        LINKS_NOT_HAVE_ACCOUNT: 'Do not have an account?',
        LINKS_SIGNIN: 'Sign in'
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
        NEW_PASSWORD: 'Nova senha',
        OPTIONS: 'Opções',
        PASSWORD: 'Senha',
        PASSWORD_CONFIRMATION: 'Confirmar a senha',
        PASSWORD_CONFIRMATION_VALIDATOR: 'Esse campo deve ser igual a senha.',
        PREVIOUS: 'Anterior',
        PROFILE: 'Perfil',
        REFERENCES: 'Referências',
        RESULTS: 'Resultados',
        SEND: 'Enviar',
        UNITS: 'Unidades',
        USERS: 'Usuários',
        VALUE: 'Valor',
        WEIGHTS: 'Pesos',

        // links.html
        LINKS_ACTIVATION: 'Não recebeu instruções de confirmação?',
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
