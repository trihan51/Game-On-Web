angular.module('signup').controller('SignupController', ['$scope', 'Authentication', function($scope, Authentication) {
	$scope.signup = function() {
		var user = new Parse.User();

		// essential fields
		user.set("username", $scope.username);
		if ($scope.password === $scope.passwordconfirm){
			user.set("password", $scope.password);
		}
		user.set("email", $scope.email);

		// additional fields
		user.set("firstName", $scope.firstname);
		user.set("lastName", $scope.lastname);

		user.signUp(null, {
			success: function(user) {
				Authentication.user = user;
				alert("Congratulations! You have successfully signed up for an account!");
			},
			error: function(user, error) {
				alert("We're sorry. You were unable to create an account. Please try again.");
			}
		});
	};
}]);