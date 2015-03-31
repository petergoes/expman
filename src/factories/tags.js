(function() {
	'use strict';

	angular
		.module('app')
		.factory('Tags', Tags);

	/* @ngInject */
	function Tags($mdDialog, $templateCache) {
		var tags = getTagsFromLocalStorage();

		var service = {
			createTag: createTag,
			getTag: getTag,
			getTags: getTags,
			useTag: useTag
		};
		return service;

		////////////////

		function createTag() {
			$mdDialog.show({
				controller: 'NewTagController',
				controllerAs: 'nt',
				template: $templateCache.get('src/components/newTag/newTag.html')
			})
			.then(handler);

			function handler(name) {
				if (name) {
					var obj = {
						id: Date.now(),
						name: name,
						used: 0,
					};

					tags.push(obj);
					saveTags();
				}
			}
		}

		function getTagsFromLocalStorage() {
			var tags = localStorage.getItem('tags');
			if (!tags) {
				return [];
			}
			return JSON.parse(tags);
		}

		function getTag(id) {
			return _.find(tags, find);

			function find(tag) {
				return (tag.id === id);
			}
		}

		function getTags() {
			return tags;
		}

		function saveTags() {

			localStorage.setItem('tags', angular.toJson(tags));
		}

		function useTag(id) {
			var tag = _.find(tags, find);
			tag.used = tag.used + 1;
			delete tag.checked;

			saveTags();

			function find(tag) {
				return (tag.id === id);
			}
		}
	}
})();