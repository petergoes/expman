(function() {
	'use strict';

	angular
		.module('app')
		.controller('NewTagController', NewTagController);

	/* @ngInject */
	function NewTagController($mdDialog, Tags) {
		var vm = this;
		vm.add = add;
		vm.cancel = cancel;
		vm.tag = '';

		init();

		////////////////
		function add() {
			$mdDialog.hide(vm.tag);
		}

		function cancel() {
			$mdDialog.cancel();
		}

		function init() {
		}
	}
})();
