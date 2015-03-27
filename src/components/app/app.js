(function() {
	'use strict';

	angular
		.module('app')
		.controller('AppController', AppController);

	/* @ngInject */
	function AppController($scope, $mdSidenav) {
		var vm = this;
		vm.title = 'AppController';
		vm.toggleSidenav = toggleSidenav;

		init();

		////////////////

		function init() {
		}

		function toggleSidenav(menuId) {
			$mdSidenav(menuId).toggle();
		}
	}
})();
