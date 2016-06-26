(function () {
  'use strict';

  angular
    .module('app')
    .factory('httpInterceptor', httpInterceptor);

  /** @ngInject */
  function httpInterceptor($q, $location, $rootScope, toaster) {

    var service = {
      request: request,
      requestError: requestError,
      responseError: responseError
    };

    return service;

    function request(config) {
      if($rootScope.authenticationToken) {
        config.headers.Authorization = $rootScope.authenticationToken;
      }
      return config;
    }

    function requestError(rejection) {
      toaster.pop('error', '', 'Erro de request ' + rejection.status + ': ' + rejection.statusText);
    }

    function responseError(response) {
      var message = '', title = '';

      switch(response.status) {
      case -1:
        message = 'Não foi possível se conectar com o servidor. Tente novamente mais tarde.';
        break;
      case 401:
        $rootScope.authenticationToken = null;
        $location.path('/login');
        message = 'Existe mais de uma sessão com o mesmo login ou você não entrou.';
        break;
      case 403:
        message = 'Você não tem permissão para acessar essa funcionalidade.';
        break;
      case 404:
        message = 'O dado solicitado não foi encontrado.';
        break;
      case 405:
        message = 'Método não implementado.';
        break;
      case 422:
        message = response.data.message ?
          response.data.message : 'Por favor, corrija o(s) erro(s) encontrado(s).';
       break;
      case 500:
      case 503:
        title = 'Serviço indisponível';
        message = 'Nos desculpe, tente novamente mais tarde.';
        break;
      default:
        title = 'Erro inesperado';
        message = 'Favor entrar em contato com o administrador do sistema informando o código: '
          + response.status;
        break;
      }

      if(message) {
        toaster.pop('error', title, message);
      }

      // !!Important Must use promise api's q.reject()
      // to properly implement this interceptor
      // or the response will go the success handler of the caller
      return $q.reject(response);
    }
  }
})();
