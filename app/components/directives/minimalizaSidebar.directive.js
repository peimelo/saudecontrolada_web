//TODO: resolver setTimeout()
(function() {
  'use strict';

  angular
    .module('app')
    .directive('minimalizaSidebar', minimalizaSidebar);

  /** @ngInject */
  function minimalizaSidebar($timeout, $window) {
    var directive = {
      restrict: 'A',
      template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary" href="" ng-click="vm.minimalize()"><i class="fa fa-bars"></i></a>',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;

      vm.minimalize = minimalize;

      function minimalize() {
        $window.jQuery("body").toggleClass("mini-navbar");
        if (!$window.jQuery('body').hasClass('mini-navbar') || $window.jQuery('body').hasClass('body-small')) {
          // Hide menu in order to smoothly turn on when maximize menu
          $window.jQuery('#side-menu').hide();
          // For smoothly turn on menu
          $timeout(
            function () {
              $window.jQuery('#side-menu').fadeIn(400);
            }, 200);
        } else if ($window.jQuery('body').hasClass('fixed-sidebar')){
          $window.jQuery('#side-menu').hide();
          $timeout(
            function () {
              $window.jQuery('#side-menu').fadeIn(400);
            }, 100);
        } else {
          // Remove all inline style from jquery fadeIn function to reset menu state
          $window.jQuery('#side-menu').removeAttr('style');
        }
      }
    }
  }
})();
