angular.module('signin').factory('ServerMessage', ['$resource', function($resource) {
	return $resource('api/servermessage');
}]);