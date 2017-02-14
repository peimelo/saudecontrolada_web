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
      'scNavbar',

      /*
       * Feature areas
       */
      'app.weights'
    ]);
})();
