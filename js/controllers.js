'use strict';

/* Controllers */

var protocolosApp = angular.module('protocolosApp', []);

protocolosApp.controller('EmpresaCtrl', function($scope) {

	$scope.empresas = [
		{
			'nome': 'Vivo',
			'descricao': 'Celular, Fixo, Internet, TV',
			'telefone': '555555'
		},
		{
			'nome': 'NET Serviços',
			'descricao': 'TV, Banda Larga e Telefone',
			'telefone': '6666666'
		},
		{
			'nome': 'Oi',
			'descricao': 'Móvel, Fixo, Internet, TV',
			'telefone': '7777777'
		},
		{
			'nome': 'Tim',
			'descricao': 'Celular',
			'telefone': '88888'
		},
		{
			'nome': 'Sky',
			'descricao': 'TV por assinatura',
			'telefone': '9999999'
		},
	];

	//$scope.empresa = null;
});