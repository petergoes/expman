(function() {
	'use strict';

	angular
		.module('app')
		.controller('AppController', AppController);

	/* @ngInject */
	function AppController($scope, $rootScope, $mdSidenav, $state) {
		var vm = this;
		vm.title = 'ExpMan';
		vm.toggleSidenav = toggleSidenav;

		init();

		$rootScope.$on('$stateChangeSuccess', onStateChange);

		////////////////

		function init() {
		}

		function toggleSidenav(menuId) {
			$mdSidenav(menuId).toggle();
		}

		function onStateChange(event, newScope) {
			console.log(arguments);
			vm.title = newScope.data.title;
		}
	}
})();
