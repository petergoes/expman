(function() {
	'use strict';

	angular
		.module('app')
		.factory('Entry', Entry);

	/* @ngInject */
	function Entry(Tags) {
		var service = {
			createNew: createNew,
			getEntries: getEntries
		};
		return service;

		////////////////

		function createNew(amount, description, tags) {
			var obj = {
				amount: amount,
				description: description,
				tags: [],
				date: Date.now()
			};

			_.each(tags, addTags);
			_.each(tags, updateTag);

			saveEntry(obj);

			function updateTag(tag) {
				Tags.useTag(tag.id);
			}

			function addTags(tag) {
				obj.tags.push(tag.id);
			}
		}

		function getEntries() {
			var date = moment().format('YYYYMM');
			return JSON.parse(localStorage.getItem('entries' + date)) || [];
		}

		function saveEntry(entry) {
			var date = moment().format('YYYYMM');
			var entriesThisMonth = JSON.parse(localStorage.getItem('entries' + date)) || [];

			entriesThisMonth.push(entry);
			localStorage.setItem('entries' + date, JSON.stringify(entriesThisMonth));
		}
	}
})();
