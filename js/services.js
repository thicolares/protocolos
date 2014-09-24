'use strict';

var protocoloServices = angular.module('protocoloServices', []);

protocoloServices.factory('Reclamacao', ['$http', function($http) {
	return $http.get('json/reclamacoes.json');
	// .success( function(data) {
	// 	$scope.reclamacoes = data;
	// });
}]);

protocoloServices.factory('Empresa', ['$http', function($http) {
	return $http.get('json/empresas.json');
}]);