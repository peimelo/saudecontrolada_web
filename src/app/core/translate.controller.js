/**
 * translateCtrl - Controller for translate
 */
(function() {
  'use strict';

  angular
    .module('app')
    .controller('TranslateController', TranslateController);

  /** @ngInject */
  function TranslateController($translate) {
    var vm = this;

    vm.changeLanguage = changeLanguage;
    vm.flags = {
      'en': '../img/flags/16/United-States.png',
      'pt-BR': '../img/flags/16/Brazil.png'
    };
    vm.language = 'pt-BR';

    function changeLanguage(langKey) {
      $translate.use(langKey);
      vm.language = langKey;
    }
  }
})();
