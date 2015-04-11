(function() {
	'use strict';

	angular
		.module('app')
		.directive('epTagList', TagList);

	/* @ngInject */
	function TagList ($templateCache) {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			template: template,
			controller: 'TagListController',
			controllerAs: 'tagList',
			link: link,
			restrict: 'EA',
			scope: {
			}
		};
		return directive;

		function link(scope, element, attrs) {
		}

		function template() {
			return $templateCache.get('src/components/tagList/tagList.html');
		}
	}
})();
