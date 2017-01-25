// (function() {
//   'use strict';
//
//   angular
//     .module('app')
//     .directive('preferredLanguage', preferredLanguage);
//
//   /** @ngInject */
//   function preferredLanguage($translate) {
//     var directive = {
//       restrict: 'A',
//       templateUrl: 'app/components/directives/preferredLanguage/preferredLanguage.html',
//       controller: NavbarController,
//       controllerAs: 'vm'
//     };
//
//     return directive;
//
//     /** @ngInject */
//     function NavbarController() {
//       var vm = this;
//
//       vm.changeLanguage = changeLanguage;
//       vm.flags = {
//         'en': '../img/flags/16/United-States.png',
//         'pt-BR': '../img/flags/16/Brazil.png'
//       };
//       vm.language = 'pt-BR';
//
//       function changeLanguage(langKey) {
//         $translate.use(langKey);
//         vm.language = langKey;
//       }
//     }
//   }
// })();
