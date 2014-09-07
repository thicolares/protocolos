'use strict';

/* Controllers */

var protocolosApp = angular.module('protocolosApp', []);

protocolosApp.controller('EmpresaCtrl', function($scope, $http) {
	$http.get('empresas.json').success( function(data) {
		$scope.empresas = data;
	});
});