(function() {
	'use strict';

	angular
		.module('app')
		.controller('EntryListController', EntryListController);

	/* @ngInject */
	function EntryListController(Entry, Tags) {
		var entries = getEntries();

		var vm = this;
		vm.entries = entries;
		vm.total = total;
		vm.title = 'EntryListController';

		init();

		////////////////

		function getEntries() {
			var entries = Entry.getEntries;

			_.each(entries, findTagNames);

			return entries;

			function findTagNames(entry) {
				entry.tagNames = [];
				_.each(entry.tags, function(tagId, index) {
					entry.tagNames.push(Tags.getTag(tagId).name);
				});
			}
		}

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
