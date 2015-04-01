(function() {
	'use strict';

	angular
		.module('app')
		.directive('epApp', App);

	/* @ngInject */
	function App ($templateCache) {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			template: template,
			controller: 'AppController',
			controllerAs: 'app',
			link: link,
			restrict: 'EA',
			scope: {
			}
		};
		return directive;

		function link(scope, element, attrs) {
		}

		function template() {
			return $templateCache.get('src/components/app/app.html');
		}
	}
})();
