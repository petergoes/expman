(function() {
    'use strict';

	angular
		.module('app')
		.controller('NewEntry', NewEntry);

	NewEntry.$inject = ['$scope'];

	function NewEntry($scope) {
		// view model
		var vm = this;

		vm.amount = null;
		vm.description = '';
		vm.tags = [
			{name: "Food", used: 2, checked: false},
			{name: "Home", used: 1, checked: false},
			{name: "Other", used: 1, checked: false},
			{name: "Sports", used: 5, checked: false}
		];
		vm.toggleMoreTags = false;
		vm.toggleTags = toggleTags;


		function toggleTags() {
			vm.toggleMoreTags = !vm.toggleMoreTags;
		}
	}

})();