(function() {
	'use strict';

	angular
		.module('app')
		.directive('epPrimaryFab', epPrimaryFab);

	/* @ngInject */
	function epPrimaryFab ($templateCache) {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			template: template,
			controller: 'PrimaryFabController',
			controllerAs: 'primaryFab',
			link: link,
			restrict: 'EA',
			scope: {
			}
		};
		return directive;

		function link(scope, element, attrs) {
		}

		function template() {
			return $templateCache.get('src/components/primaryFab/primaryFab.html');
		}
	}
})();
