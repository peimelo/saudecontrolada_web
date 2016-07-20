(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($sce, sessionService, $state, $translate, $uibModal) {
    var vm = this;

    vm.alerts = [];
    vm.changeLanguage = changeLanguage;
    vm.closeAlert = closeAlert;
    vm.contactModal = contactModal;
    vm.interval = 5000;
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
    vm.passwordRules = $sce.trustAsHtml(
      'Para sua segurança, a senha deve ter no mínimo 8 caracteres com pelo menos: <br /> \
      <ul> \
        <li>1 letra maiúscula,</li> \
        <li>1 letra minúscula,</li> \
        <li>1 número,</li> \
        <li>e 1 símbolo.</li>\
      </ul>\
      Símbolos incluem: <br />\
      `~!@#$%^&*()-_=+[]{}\\|;:\'",.<>/?'
    );
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
      vm.interval = 0;

      var modalInstance = $uibModal.open({
        animation: true,
        controller: 'ContactModalController',
        controllerAs: 'vm',
        size: 'lg',
        templateUrl: 'contactModal.html',
        windowClass: 'center-modal'
      });

      modalInstance.result.then(
        function () {
          vm.interval = 5000;
        },
        function () {
          vm.interval = 5000;
      });
    }

    function logout() {
      sessionService.logout();
      $state.go('home');
    }
  }
})();
