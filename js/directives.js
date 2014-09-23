'use strict';

var protocoloDirectives = angular.module('protocoloDirectives', []);

protocoloDirectives.directive('proEmpresa', function() {
	return {
		templateUrl: "partials/empresa.html"
	}
})