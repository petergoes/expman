(function() {
	'use strict';

	angular
		.module('app')
		.controller('EntryListController', EntryListController);

	/* @ngInject */
	function EntryListController(Entry, Tags) {

		var vm = this;
		vm.entries = Entry.getEntries;
		vm.total = total;
		vm.title = 'EntryListController';

		init();

		////////////////

		function total() {
			var amount = 0;
			_.each(vm.entries, addToAmount);
			return amount;

			function addToAmount(entry) {
				amount += entry.amount;
			}
		}

		function init() {
		}
	}
})();
