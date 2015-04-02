(function() {
	'use strict';

	angular
		.module('app')
		.controller('SidenavController', SidenavController);

	/* @ngInject */
	function SidenavController($rootScope, $state, $mdSidenav) {
		var vm = this;
		vm.currentState = '';
		vm.navigateTo = navigateTo;
		vm.toggleSidenav = toggleSidenav;
		vm.title = 'SidenavController';

		init();

		$rootScope.$on('toggle-sidenav', onToggleSidenav);
		$rootScope.$on('$stateChangeSuccess', onStateChange);

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

		function onStateChange(event, toState) {
			console.log('state change to', toState.name);
			vm.currentState = toState.name;
		}

		function onToggleSidenav(event, menuId) {
			toggleSidenav(menuId);
		}
	}
})();
