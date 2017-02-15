(function() {
  'use strict';

  angular
    .module('app', [
      /*
       * Angular modules
       */
      'ngAnimate',
      'ngMessages',
      'ngTouch',
      'ngSanitize',
      'ngResource',

      /*
       * 3rd Party modules
       */
      'angular-confirm',
      'angular-flot',
      'blockUI',
      'datePicker',
      'focus-if',
      'oitozero.ngSweetAlert',
      'pascalprecht.translate',
      'permission',
      'scComponents',
      'toaster',
      'ui.bootstrap',
      'ui.gravatar',
      'ui.mask',
      'ui.router',
      'ui.select',
      'ui.utils.masks',

      'ui.validate',
      /*
       * Our reusable cross app code modules
       */
      'pageTitle',

      /*
       * Feature areas
       */
      'app.home',
      'app.weights'
    ]);
})();
