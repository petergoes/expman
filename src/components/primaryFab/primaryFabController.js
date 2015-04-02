(function() {
	'use strict';

	angular
		.module('app')
		.controller('PrimaryFabController', PrimaryFabController);

	/* @ngInject */
	function PrimaryFabController($scope, $rootScope) {
		var vm = this;
		vm.clicked = clicked;
		vm.disabled = false;
		vm.title = 'PrimaryFabController';

		$scope.$on('primary-fab-activate', activate);
		$scope.$on('primary-fab-deactivate', deactivate);
		$rootScope.$on('$stateChangeSuccess', activate);

		init();

		////////////////

		function clicked() {
			$rootScope.$broadcast('primary-fab-clicked');
		}

		function activate() {
			vm.disabled = false;
		}

		function deactivate() {
			vm.disabled = true;
		}

		function init() {
		}
	}
})();
