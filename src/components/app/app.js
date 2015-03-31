(function() {
	'use strict';

	angular
		.module('app')
		.controller('AppController', AppController);

	/* @ngInject */
	function AppController($scope, $mdSidenav, $state) {
		var vm = this;
		vm.title = $state.current.data.title;
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
