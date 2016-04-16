(function() {
  'use strict';

  angular
    .module('app')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($rootScope, $state, webDevTec) {
    var vm = this;

    vm.awesomeThings = [];
    vm.message = {};
    //vm.classAnimation = '';
    //vm.creationDate = 1439662813662;
    //vm.showToastr = showToastr;

    activate();

    function activate() {
      if($rootScope.user) {
        $state.go('dashboard');
      }

      getWebDevTec();
      //$timeout(function() {
      //  vm.classAnimation = 'rubberBand';
      //}, 4000);
    }

    //function showToastr() {
    //  toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //  vm.classAnimation = '';
    //}

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
