(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;

    vm.slides = [
      {
        id: 1,
        text: 'Um sistema feito para ajudá-lo a cuidar da sua saúde.',
        class: 'header-back one'
      },
      {
        id: 2,
        text: 'Para você ter uma vida saudável e tranquila.',
        class: 'header-back two'
      }
    ];
  }
})();
