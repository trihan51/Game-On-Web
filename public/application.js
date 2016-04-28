var mainApplicationModuleName = 'game-on-web';

<<<<<<< HEAD
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'users', 'home', 'signin']);
=======
var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'users', 'home', 'signin', 'signup']);
>>>>>>> dev2

mainApplicationModule.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});