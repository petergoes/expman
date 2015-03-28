(function() {
	'use strict';

	angular
		.module('app')
		.directive('epNewEntry', NewEntry);

	/* @ngInject */
	function NewEntry ($templateCache) {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			template: template,
			controller: 'NewEntryController',
			controllerAs: 'newEntry',
			link: link,
			restrict: 'EA',
			scope: {
			}
		};
		return directive;

		function link(scope, element, attrs) {
		}

		function template() {
			return $templateCache.get('src/components/newEntry/newEntry.html');
		}
	}
})();
