'use strict';

var protocoloDirectives = angular.module('protocoloDirectives', []);

protocoloDirectives.directive('proEmpresa', function() {
	return {
		restrict: 'E',
		scope: {
			empresaDados: '=empresa'
		},
		templateUrl: "partials/empresa.html"
	}
});

protocoloDirectives.directive('proObrigatorio', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			element.html(element.text() + ' <span style="color: red;">*</span>');
		}
	}
});

protocoloDirectives.directive('proComentario', function() {
	return {
		restrict: 'E',
		scope: {
			reclamacao: '='
		},
		controller: function($scope) {
			$scope.adicionarComentario = function() {
				$scope.comentario.data = new Date();
				$scope.reclamacao.comentarios.push(angular.copy($scope.comentario));
				$scope.comentario = {};
			}

			$scope.removeComentario = function(index) {

			}
		},
		templateUrl: 'partials/comentario.html'
	}
});