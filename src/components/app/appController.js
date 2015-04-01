(function() {
	'use strict';

	angular
		.module('app')
		.controller('AppController', AppController);

	/* @ngInject */
	function AppController($scope, $rootScope, $state) {
		var vm = this;
		vm.title = 'ExpMan';
		vm.toggleSidenav = toggleSidenav;

		init();

		$rootScope.$on('$stateChangeSuccess', onStateChange);

		////////////////

		function init() {
		}

		function toggleSidenav(menuId) {
			$rootScope.$broadcast('toggle-sidenav', 'left');
		}

		function onStateChange(event, newScope) {
			vm.title = newScope.data.title;
		}
	}
})();
