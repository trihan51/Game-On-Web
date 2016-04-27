var mainApplicationModuleName = 'game-on-web';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['home']);

angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});