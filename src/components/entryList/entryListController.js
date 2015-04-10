(function() {
	'use strict';

	angular
		.module('app')
		.controller('EntryListController', EntryListController);

	/* @ngInject */
	function EntryListController($scope, Entry, Tags) {

		var vm = this;
		vm.edit = Entry.editEntry;
		vm.entries = Entry.getEntries;
		vm.total = total;
		vm.showHeader = false;
		vm.showSubheader = false;
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
			vm.showHeader = $scope.header;
			vm.showSubheader = $scope.subheader;
		}
	}
})();
