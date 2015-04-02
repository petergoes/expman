(function() {
	'use strict';

	angular
		.module('app')
		.controller('HomeController', HomeController);

	/* @ngInject */
	function HomeController($rootScope) {
		var vm = this;
		vm.title = 'HomeController';

		init();

		////////////////

		function init() {
			$rootScope.$broadcast('primary-fab-deactivate');
		}
	}
})();
