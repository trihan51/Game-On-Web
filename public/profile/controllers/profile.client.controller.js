angular.module('profile').controller('ProfileController', ['$scope', 'Authentication', function($scope, Authentication) {
	$scope.authentication = Authentication;
}]);