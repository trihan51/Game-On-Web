var mainApplicationModuleName = 'game-on-web';

var mainApplicationModule = angular.module(
	mainApplicationModuleName, 
	[
		'ngRoute', 
		'users', 
		'home', 
		'signin', 
		'signup', 
		'profile', 
		'join', 
		'host',
		'session'
	]
);

mainApplicationModule.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});