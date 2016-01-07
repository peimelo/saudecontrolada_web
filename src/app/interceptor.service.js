(function () {
  'use strict';

  angular
    .module('app')
    .factory('httpInterceptor', httpInterceptor);

  /** @ngInject */
  function httpInterceptor($q, $rootScope) {
    return {
      'request': function(config) {
        if($rootScope.user && $rootScope.user.authentication_token) {
          config.headers['Authorization'] = $rootScope.user.authentication_token;
        }
        return config;
      },
      'requestError': function (rejection) {
        toastr.error('Erro de request ' + rejection.status + ': ' + rejection.statusText);
      },
      'responseError': function (response) {
        var mensagem = '';

        switch(response.status) {
          case 401:
            //user not loged
            mensagem = 'Você não tem permissão para acessar essa funcionalidade.';
            break;
          case 405:
            mensagem = 'Método não implementado.';
            break;
          case 422:
          //  mensagem = response.data.errors ? response.data.errors : 'IMPLEMENTAR';
            break;
          case 500:
          case 503:
            mensagem = 'O serviço está indisponível. Tente novamente mais tarde.';
            break;
          default:
            mensagem = 'Erro inesperado. Favor entrar em contato com o administrador do sistema informando o código de erro: ' + response.status;
            break;
        }

        //$log.error('XHR Failed for login.\n' + angular.toJson(response.data, true));
        if(mensagem)
          toastr.error(mensagem);

        // !!Important Must use promise api's q.reject()
        // to properly implement this interceptor
        // or the response will go the success handler of the caller
        return $q.reject(response);
      }
    };
  }

})();
