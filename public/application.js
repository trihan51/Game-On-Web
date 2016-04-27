var mainApplicationModuleName = 'game-on-web';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'home']);

mainApplicationModule.config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});