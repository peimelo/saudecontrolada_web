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
        AVERAGE: 'Average',
        BACK: 'Back',
        CANCEL: 'Cancel',
        CHANGING: 'Changing',
        CONFIRMATION: 'Confirmation',
        CONTINUE_INCLUDING: 'Continue Including',
        DASHBOARD: 'Dashboard',
        DATE: 'Date',
        DATE_BIRTH: 'Birthday',
        DESCRIPTION: 'Description',
        ENTRIES: 'Entries',
        EXAM: 'Exam',
        EXAMS: 'Exams',
        FEMALE: 'Female',
        GENDER: 'Gender',
        GRAPHIC: 'Graphic',
        GRAPHICS: 'Graphics',
        HEIGHT: 'Height',
        IN: 'in',
        INCLUDE: 'Include',
        INCLUDING: 'Including',
        LOGOUT: 'Log out',
        MALE: 'Male',
        MAXIMUM: 'Maximum',
        MAXIMUM_AGE: 'Max. Age',
        MAXIMUM_VALUE: 'Max. Value',
        MINIMUM: 'Minimum',
        MINIMUM_AGE: 'Min. Age',
        MINIMUM_VALUE: 'Min. Value',
        NAME: 'Name',
        NEXT: 'Next',
        NEW_PASSWORD: 'New password',
        OPTIONS: 'Options',
        PASSWORD: 'Password',
        PASSWORD_CONFIRMATION: 'Password confirmation',
        PASSWORD_CONFIRMATION_VALIDATOR: 'This field must match the password.',
        PREVIOUS: 'Previous',
        PROFILE: 'Profile',
        REFERENCE: 'Reference',
        REFERENCES: 'References',
        RESULTS: 'Results',
        SAVE: 'Save',
        SEND: 'Send',
        TESTS_RESULTS: 'Tests Results',
        TOTAL: 'Total',
        UNIT: 'Unit',
        UNITS: 'Units',
        USERS: 'Users',
        VALID: 'Valid',
        VALUE: 'Value',
        VALUES: 'Values',
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
        AVERAGE: 'Média',
        BACK: 'Voltar',
        CANCEL: 'Cancelar',
        CHANGING: 'Alterando',
        CONFIRMATION: 'Confirmação',
        CONTINUE_INCLUDING: 'Marque aqui se quiser continuar incluindo',
        DASHBOARD: 'Painel',
        DATE: 'Data',
        DATE_BIRTH: 'Data de nascimento',
        DESCRIPTION: 'Descrição',
        ENTRIES: 'Cadastros',
        EXAM: 'Exame',
        EXAMS: 'Exames',
        FEMALE: 'Feminino',
        GENDER: 'Sexo',
        GRAPHIC: 'Gráfico',
        GRAPHICS: 'Gráficos',
        HEIGHT: 'Altura',
        IN: 'em',
        INCLUDE: 'Incluir',
        INCLUDING: 'Incluindo',
        LOGOUT: 'Sair',
        MALE: 'Masculino',
        MAXIMUM: 'Máximo',
        MAXIMUM_AGE: 'Idade Máx.',
        MAXIMUM_VALUE: 'Valor Máx.',
        MINIMUM: 'Mínimo',
        MINIMUM_AGE: 'Idade Mín.',
        MINIMUM_VALUE: 'Valor Mín.',
        NAME: 'Nome',
        NEXT: 'Próximo',
        NEW_PASSWORD: 'Nova senha',
        OPTIONS: 'Opções',
        PASSWORD: 'Senha',
        PASSWORD_CONFIRMATION: 'Confirmar a senha',
        PASSWORD_CONFIRMATION_VALIDATOR: 'Esse campo deve ser igual a senha.',
        PREVIOUS: 'Anterior',
        PROFILE: 'Perfil',
        REFERENCE: 'Referência',
        REFERENCES: 'Referências',
        RESULTS: 'Resultados',
        SAVE: 'Salvar',
        SEND: 'Enviar',
        TESTS_RESULTS: 'Resultados de Exames',
        TOTAL: 'Total',
        UNIT: 'Unidade',
        UNITS: 'Unidades',
        USERS: 'Usuários',
        VALID: 'Válido',
        VALUE: 'Valor',
        VALUES: 'Valores',
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
