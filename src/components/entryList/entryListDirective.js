(function() {
	'use strict';

	angular
		.module('app')
		.directive('epEntryList', EntryList);

	/* @ngInject */
	function EntryList ($templateCache) {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			template: template,
			controller: 'EntryListController',
			controllerAs: 'el',
			link: link,
			restrict: 'EA',
			scope: {
			}
		};
		return directive;

		function link(scope, element, attrs) {
			scope.el.header = attrs.hasOwnProperty('header');
			scope.el.subheader = attrs.hasOwnProperty('subheader');
		}

		function template() {
			return $templateCache.get('src/components/entryList/entryList.html');
		}
	}
})();
