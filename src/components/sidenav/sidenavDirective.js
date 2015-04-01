(function() {
	'use strict';

	angular
		.module('app')
		.directive('epSidenav', epSidenav);

	/* @ngInject */
	function epSidenav ($templateCache) {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			template: template,
			controller: 'SidenavController',
			controllerAs: 'sidenav',
			link: link,
			restrict: 'EA',
			scope: {
			}
		};
		return directive;

		function link(scope, element, attrs) {
		}

		function template() {
			return $templateCache.get('src/components/sidenav/sidenav.html');
		}
	}
})();
