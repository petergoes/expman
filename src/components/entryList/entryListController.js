(function() {
	'use strict';

	angular
		.module('app')
		.controller('EntryListController', EntryListController);

	/* @ngInject */
	function EntryListController(Entry) {
		var vm = this;
		vm.entries = Entry.getEntries();
		vm.title = 'EntryListController';

		init();

		////////////////

		function init() {
		}
	}
})();
