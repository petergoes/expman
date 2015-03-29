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
			getTags: getTags
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
						name: name,
						used: 0,
					};

					tags.push(obj);
					localStorage.setItem('tags', JSON.stringify(tags));
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

		function getTags() {
			return tags;
		}
	}
})();
