(function() {
	'use strict';

	angular
		.module('app')
		.controller('EditEntryController', EditEntryController);

	/* @ngInject */
	function EditEntryController($scope, $mdDialog, entry, Entry) {
		var orgEntry = _.clone(entry);

		var vm = this;
		vm.cancel = cancel;
		vm.entry = entry;
		vm.save = save;
		vm.title = 'EditEntryController';

		init();

		////////////////

		function cancel() {
			_.forEach(orgEntry, function(n, key) {
				entry[key] = n;
			});
			$mdDialog.cancel(orgEntry);
		}

		function init() {
		}

		function save() {
			$mdDialog.hide(vm.entry);
		}
	}
})();
