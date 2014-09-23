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