(function() {
  'use strict';

  angular
    .module('pageTitle')
    .component('pageTitle', {
      bindings: {
        total: '<'
      },
      templateUrl: 'app/components/page-title/page-title.template.html',
      controller: ['$state',
        function($state) {
          var self = this;

          self.icon = $state.current.data.pageIcon;
          self.title = $state.current.data.pageTitle;
        }
      ]
    });
})();
