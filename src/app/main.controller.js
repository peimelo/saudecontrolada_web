(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(sessionService, $state, $translate, $uibModal) {
    var vm = this;

    vm.alerts = [];
    vm.changeLanguage = changeLanguage;
    vm.closeAlert = closeAlert;
    vm.contactModal = contactModal;
    vm.language = {};
    vm.languages = [
      {
        country: 'Brasil',
        langKey: 'pt-BR',
        flag: '../img/flags/16/Brazil.png'
      },
      {
        country: 'United States',
        langKey: 'en',
        flag: '../img/flags/16/United-States.png'
      }
    ];
    vm.logout = logout;
    vm.sessionService = sessionService;

    activate();

    function activate() {
      changeLanguage(vm.languages[0]);
    }

    function changeLanguage(language) {
      $translate.use(language.langKey);
      vm.language = language;
    }

    function closeAlert(index) {
      vm.alerts.splice(index, 1);
    }

    function contactModal() {
      $uibModal.open({
        animation: true,
        controller: 'ContactModalController',
        controllerAs: 'vm',
        size: 'lg',
        templateUrl: 'contactModal.html',
        windowClass: 'center-modal'
      });
    }

    function logout() {
      sessionService.logout();
      $state.go('home');
    }
  }
})();
