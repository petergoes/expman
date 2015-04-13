(function() {
	'use strict';

	angular
		.module('app')
		.controller('SettingsController', SettingsController);

	/* @ngInject */
	function SettingsController($mdDialog, $window) {
		var vm = this;
		vm.reset = reset;

		init();

		////////////////

		function init() {
		}

		function reset() {
			var confirm = $mdDialog.confirm()
				.title('Reset all?')
				.content('This will erase all your data. Are your sure?')
				.ok('Yes')
				.cancel('No');
			$mdDialog.show(confirm).then(function() {
				localStorage.clear();
				$window.location.reload();
			});
		}
	}
})();
