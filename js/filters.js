'use strict';

/* Services */

var protocoloFilters = angular.module('protocoloFilters', []);

protocoloFilters.filter('simNao', function() {
	return function(input, estilo) {
		return input === true ? 'Sim' : 'Não';
	}
})

