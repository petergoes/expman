angular.module('app', ['ngMaterial']);

angular.module('app')
	.controller('AppController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
		$scope.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};
	}]);

angular.module('app')
	.controller('ItemsController', ['$scope', function($scope){
		$scope.items = [
			{
				title: "Item 1",
				amount: 3.95
			},
			{
				title: "Item 2",
				amount: 3.95
			},
			{
				title: "Item 3",
				amount: 3.95
			}
		];
	}]);