(function() {
	'use strict';

	angular
		.module('app')
		.controller('NewEntryController', NewEntry);

	/* @ngInject */
	function NewEntry($scope) {
		var vm = this;
		vm.title = 'NewEntry';
		vm.amount = null;
		vm.description = '';
		vm.tags = [
			{name: 'Food', used: 2, checked: false},
			{name: 'Home', used: 1, checked: false},
			{name: 'Other', used: 1, checked: false},
			{name: 'Sports', used: 5, checked: false}];
		vm.toggleMoreTags = false;
		vm.toggleTags = toggleTags;

		init();

		////////////////

		function init() {
		}

		function toggleTags() {
			vm.toggleMoreTags = !vm.toggleMoreTags;
		}
	}

})();
