(function() {
	'use strict';

	angular
		.module('app')
		.factory('Entry', Entry);

	/* @ngInject */
	function Entry(Tags) {
		var entriesThisMonth = getEntriesFromLocalStorage();

		var service = {
			createNew: createNew,
			getEntries: entriesThisMonth
		};
		return service;

		////////////////

		function createNew(amount, description, tags) {
			var obj = {
				id: Date.now(),
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

		function getEntriesFromLocalStorage() {
			var date = moment().format('YYYYMM');
			var entries = JSON.parse(localStorage.getItem('entries' + date)) || [];

			_.each(entries, addMomentdate);

			return entries;

			function addMomentdate(entry) {
				entry.momentDate = moment(entry.date).fromNow();
			}
		}

		function saveEntry(entry) {
			var date = moment().format('YYYYMM');
			entriesThisMonth.push(entry);
			localStorage.setItem('entries' + date, angular.toJson(entriesThisMonth));
		}
	}
})();
