(function() {
	'use strict';

	angular
		.module('app')
		.controller('ThisMonthController', ThisMonthController);

	/* @ngInject */
	function ThisMonthController($rootScope, Entry) {
		var entries = Entry.getEntries;

		var vm = this;
		vm.title = 'ThisMonthController';
		vm.total = Entry.getMonthTotal();
		vm.totalEntries = entries.length;

		$rootScope.$on('entries-updated', onEntriesUpdated);

		init();

		////////////////

		function init() {
		}

		function onEntriesUpdated() {
			vm.total = Entry.getMonthTotal();
		}
	}
})();
