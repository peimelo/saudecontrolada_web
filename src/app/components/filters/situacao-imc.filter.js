(function () {
  'use strict';

  angular
    .module('app')
    .filter('situacaoImcFilter', situacaoImcFilter);

  /** @ngInject */
  function situacaoImcFilter() {
    return function(input) {
      if(input <= 18.49) {
        return "<i class='fa fa-hand-o-down fa-lg'></i> Abaixo do peso";
      }
      else if(input > 18.49 && input < 25) {
        return "<i class='fa fa-smile-o fa-lg'></i> Normal";
      }
      else if(input >= 25 && input < 30){
        return "<i class='fa fa-hand-o-up fa-lg'></i> Acima do peso";
      }
      else if(input >= 30) {
        return "<i class='fa fa-warning fa-lg'></i> Obesidade";
      }
    };
  }
})();
