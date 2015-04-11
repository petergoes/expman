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
			scope.tagList.layout = attrs.listLayout || 'row';
			scope.tagList.newTagButton = attrs.hasOwnProperty('newTagButton');
		}

		function template() {
			return $templateCache.get('src/components/tagList/tagList.html');
		}
	}
})();
