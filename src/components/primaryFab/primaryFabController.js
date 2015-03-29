(function() {
	'use strict';

	angular
		.module('app')
		.controller('PrimaryFabController', PrimaryFabController);

	/* @ngInject */
	function PrimaryFabController($scope, $rootScope) {
		var vm = this;
		vm.clicked = clicked;
		vm.disabled = true;
		vm.title = 'PrimaryFabController';

		$scope.$on('primary-fab-activate', activate);
		$scope.$on('primary-fab-deactivate', deactivate);
		$scope.$on('$stateChangeSuccess', deactivate);

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
