(function() {
  'use strict';

  angular
    .module('app')
    .directive('iboxTools', iboxTools);

  /** @ngInject */
  function iboxTools($timeout) {
    var directive = {
      restrict: 'A',
      scope: true,
      templateUrl: 'app/components/directives/iboxTools/ibox_tools.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($element) {
      var vm = this;

      vm.closebox = closebox;
      vm.showhide = showhide;

      // Function for close ibox
      function closebox() {
        var ibox = $element.closest('div.ibox');
        ibox.remove();
      }

      // Function for collapse ibox
      function showhide() {
        var ibox = $element.closest('div.ibox');
        var icon = $element.find('i:first');
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200);
        // Toggle icon from up to down
        icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        $timeout(function () {
          ibox.resize();
          ibox.find('[id^=map-]').resize();
        }, 50);
      }
    }
  }

})();
