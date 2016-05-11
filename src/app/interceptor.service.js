(function () {
  'use strict';

  angular
    .module('app')
    .factory('httpInterceptor', httpInterceptor);

  /** @ngInject */
  function httpInterceptor($q, $location, $rootScope, toastr) {

    var service = {
      request: request,
      requestError: requestError,
      responseError: responseError
    };

    return service;

    function request(config) {
      if($rootScope.authentication_token) {
        config.headers.Authorization = $rootScope.authentication_token;
      }
      return config;
    }

    function requestError(rejection) {
      toastr.error('Erro de request ' + rejection.status + ': ' + rejection.statusText);
    }

    function responseError(response) {
      var mensagem = '';

      switch(response.status) {
      case 401:
        mensagem = 'Existe mais de uma sessão com o mesmo login ou você não entrou.';
        $location.path('/login');
        break;
      case 403:
        mensagem = 'Você não tem permissão para acessar essa funcionalidade.';
        break;
      case 404:
        mensagem = 'O dado solicitado não foi encontrado.';
        break;
      case 405:
        mensagem = 'Método não implementado.';
        break;
      case 422:
       mensagem = 'Por favor, corrija os erros encontrados.';
       break;
      case 500:
      case 503:
        mensagem = 'O serviço está indisponível. Tente novamente mais tarde.';
        break;
      default:
        mensagem = 'Erro inesperado. Favor entrar em contato com o administrador do sistema informando o código de erro: ' + response.status;
        break;
      }

      if(mensagem) {
        toastr.error(mensagem);
      }

      // !!Important Must use promise api's q.reject()
      // to properly implement this interceptor
      // or the response will go the success handler of the caller
      return $q.reject(response);
    }
  }

})();
