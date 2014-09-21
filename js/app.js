'use strict';

/* App Module */

var protocolosApp = angular.module('protocolosApp', [
  'ngRoute',
  'protocoloControllers'
]);

protocolosApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/reclamacoes', {
        templateUrl: 'partials/gerenciar-reclamacoes.html',
        controller: 'GerenciarReclamacoesCtrl'
      }).
      when('/reclamacao/:reclamacaoId', {
        templateUrl: 'partials/reclamacao.html',
        controller: 'ReclamacaoCtrl'
      }).
      otherwise({
        redirectTo: '/reclamacoes'
      });
  }]);