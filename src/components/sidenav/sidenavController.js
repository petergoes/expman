(function() {
	'use strict';

	angular
		.module('app')
		.controller('SidenavController', SidenavController);

	/* @ngInject */
	function SidenavController($rootScope, $state, $mdSidenav) {
		var vm = this;
		vm.navigateTo = navigateTo;
		vm.toggleSidenav = toggleSidenav;
		vm.title = 'SidenavController';

		init();

		$rootScope.$on('toggle-sidenav', onToggleSidenav);

		////////////////

		function init() {
		}

		function navigateTo(state) {
			$state.go(state);
			toggleSidenav('left');
		}

		function toggleSidenav(menuId) {
			if (menuId) {
				$mdSidenav(menuId).toggle();
			}
		}

		function onToggleSidenav(event, menuId) {
			toggleSidenav(menuId);
		}
	}
})();
