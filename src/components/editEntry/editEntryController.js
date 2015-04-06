(function() {
	'use strict';

	angular
		.module('app')
		.controller('EditEntryController', EditEntryController);

	/* @ngInject */
	function EditEntryController($scope, $mdDialog) {
		var vm = this;
		vm.cancel = cancel;
		vm.save = save;
		vm.title = 'EditEntryController';

		init();

		////////////////

		function cancel() {
			$mdDialog.cancel();
		}

		function init() {
		}

		function save() {
			$mdDialog.hide();
		}
	}
})();
