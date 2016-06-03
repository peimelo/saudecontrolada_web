(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  /** @ngInject */
  function config($translateProvider) {
    $translateProvider
      .translations('en', {
        // Define all menu elements
        DASHBOARD: 'Dashboard',
        LOGOUT: 'Log out',
        WEIGHTS: 'Weights',

        NEXT: 'Next',
        OPTIONS: 'Options',
        PREVIOUS: 'Previous',
        PROFILE: 'Profile',
        INCLUDE: 'Include',

        GRAPHS: 'Graphs',
        MAILBOX: 'Mailbox',
        WIDGETS: 'Widgets',
        METRICS: 'Metrics',
        FORMS: 'Forms',
        APPVIEWS: 'App views',
        OTHERPAGES: 'Other pages',
        UIELEMENTS: 'UI elements',
        MISCELLANEOUS: 'Miscellaneous',
        GRIDOPTIONS: 'Grid options',
        TABLES: 'Tables',
        COMMERCE: 'E-commerce',
        GALLERY: 'Gallery',
        MENULEVELS: 'Menu levels',
        ANIMATIONS: 'Animations',
        LANDING: 'Landing page',

        // Define some custom text
        WELCOME: 'Welcome Amelia',
        MESSAGEINFO: 'You have 42 messages and 6 notifications.',
        SEARCH: 'Search for something...',
        DEMO: 'Internationalization (sometimes shortened to \"I18N , meaning \"I - eighteen letters -N\") is the process of planning and implementing products and services so that they can easily be adapted to specific local languages and cultures, a process called localization . The internationalization process is sometimes called translation or localization enablement .',

        // Define label forms
        DATE: 'Date',
        HEIGHT: 'Height',
        VALUE: 'Value'
      })
      .translations('pt-BR', {
        // Define all menu elements
        DASHBOARD: 'Painel',
        LOGOUT: 'Sair',
        WEIGHTS: 'Pesos',

        NEXT: 'Próximo',
        OPTIONS: 'Opções',
        PREVIOUS: 'Anterior',
        PROFILE: 'Perfil',
        INCLUDE: 'Incluir',

        GRAPHS: 'Gráficos',
        MAILBOX: 'El correo',
        WIDGETS: 'Widgets',
        METRICS: 'Métrica',
        FORMS: 'Formas',
        APPVIEWS: 'Vistas app',
        OTHERPAGES: 'Otras páginas',
        UIELEMENTS: 'UI elements',
        MISCELLANEOUS: 'Misceláneo',
        GRIDOPTIONS: 'Cuadrícula',
        TABLES: 'Tablas',
        COMMERCE: 'E-comercio',
        GALLERY: 'Galería',
        MENULEVELS: 'Niveles de menú',
        ANIMATIONS: 'Animaciones',
        LANDING: 'Página de destino',

        // Define some custom text
        WELCOME: 'Bienvenido Amelia',
        MESSAGEINFO: 'Usted tiene 42 mensajes y 6 notificaciones.',
        SEARCH: 'Busca algo ...',
        DEMO: 'Internacionalización (a veces abreviado como \"I18N, que significa\" I - dieciocho letras N \") es el proceso de planificación e implementación de productos y servicios de manera que se pueden adaptar fácilmente a las lenguas y culturas locales específicas, un proceso llamado localización El proceso de internacionalización. a veces se llama la traducción o la habilitación de localización.',

        // Define label forms
        DATE: 'Data',
        HEIGHT: 'Altura',
        VALUE: 'Valor'
      });

    $translateProvider.preferredLanguage('pt-BR');
    $translateProvider.useSanitizeValueStrategy('sanitize');
  }
})();
