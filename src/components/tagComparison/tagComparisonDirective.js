(function() {
	'use strict';

	angular
		.module('app')
		.directive('epTagComparison', epTagComparison);

	/* @ngInject */
	function epTagComparison ($templateCache) {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			template: template,
			controller: 'TagComparisonController',
			controllerAs: 'tagcomparison',
			link: link,
			restrict: 'EA',
			scope: {
			}
		};
		return directive;

		function link(scope, element, attrs) {
		}

		function template() {
			return $templateCache.get('src/components/tagComparison/tagComparison.html');
		}
	}
})();
