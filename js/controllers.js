'use strict';

/* Controllers */

var protocoloControllers = angular.module('protocoloControllers', []);

protocoloControllers.controller('GerenciarReclamacoesCtrl', function($scope, Reclamacao, Empresa) {
	Reclamacao.success( function(data) {
		$scope.reclamacoes = data;
	});

	Empresa.success( function(data) {
		$scope.empresas = data;
	});

	$scope.inserirModal = function(reclamacao) {
		$scope.reclamacaoModal = reclamacao;
	}

	$scope.adicionarReclamacao = function() {
		$scope.reclamacao.data = new Date();
		$scope.reclamacao.comentarios = [];
		$scope.reclamacoes.push(angular.copy($scope.reclamacao));
		$scope.reclamacao = {};
		$scope.reclamacaoForm.$setPristine();
	}
});

protocoloControllers.controller('ReclamacaoCtrl', function($scope, $routeParams, Reclamacao) {
	Reclamacao.success( function(data) {
		$scope.reclamacoes = data;
		console.log($scope.reclamacoes);
		$scope.reclamacao = $scope.reclamacoes[$routeParams.reclamacaoId];
	});
});