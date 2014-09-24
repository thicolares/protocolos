'use strict';

var protocoloServices = angular.module('protocoloServices', ['ngResource']);

protocoloServices.factory('Reclamacao', ['$resource', function($resource) {
	return $resource('rest-api/public/reclamacao/:idReclamacao', {}, {
		get: { method:'GET'},
		list: { method:'GET', isArray:true}
	})
//
//
////	var resource = $resource('rest-api/public/reclamacao/:idReclamacao', {}, {
////		get: {method:'GET'},
////		list: {method:'GET',  isArray:true}
////	});
//
//	var data;
//	var resource = $resource('rest-api/public/reclamacao/:idReclamacao', {}, {
//		get: {method:'GET'},
//		list: {method:'GET',  isArray:true}
//	});
//	var reclamacoes = function(callback) {
//		data = resource.query(callback);
//		console.log(data);
//		return data;
//	}
//
//
//	return {
//		list: function(callback) {
//			console.log('callback');
//			console.log(callback);
//			if(data) {
//				console.log("returning cached data");
//				return data;
//			} else {
//				console.log("getting countries from server");
//				return reclamacoes(callback);
//			}
//		},
//		get:
//	};




}]);

protocoloServices.factory('Empresa', ['$http', function($http) {
	return $http.get('json/empresas.json');
}]);