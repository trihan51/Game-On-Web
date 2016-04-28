angular.module('profile').config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider.
		when('/profile', {
			templateUrl: 'profile/views/profile.client.view.html'
		});
	}
]);