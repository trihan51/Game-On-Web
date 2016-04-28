angular.module('host').controller('HostController', ['$scope', 'Authentication', function($scope, Authentication) {
	$scope.authentication = Authentication;
}]);