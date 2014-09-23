'use strict';

/* Controllers */

var protocoloControllers = angular.module('protocoloControllers', []);

protocoloControllers.controller('GerenciarReclamacoesCtrl', function($scope, $http) {
	$http.get('json/empresas.json').success( function(data) {
		$scope.empresas = data;
	});

	$http.get('json/reclamacoes.json').success( function(data) {
		$scope.reclamacoes = data;
	});

	$scope.adicionarReclamacao = function() {
		$scope.reclamacao.data = new Date()
		$scope.reclamacoes.push(angular.copy($scope.reclamacao));
		$scope.reclamacao = {};
		$scope.reclamacaoForm.$setPristine();
	}
});

protocoloControllers.controller('ReclamacaoCtrl', function($scope, $http, $routeParams) {
	$http.get('json/reclamacoes.json').success( function(data) {
		$scope.reclamacoes = data;
		console.log($scope.reclamacoes);
		$scope.reclamacao = $scope.reclamacoes[$routeParams.reclamacaoId];
	});
});