angular.module('host').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/host', {
			templateUrl: 'host/views/host.client.view.html'
		});
	}
]);