angular.module('host').controller('HostController', ['$scope', 'Authentication', '$q', 'CurrentSession', 'Location', function($scope, Authentication, $q, CurrentSession, Location) {
	$scope.authentication = Authentication;

	$scope.initialize = function() {
		$scope.fetchBoardGames();
	}

	$scope.fetchBoardGames = function() {
		var BoardGames = Parse.Object.extend("BoardGames");
		var query = new Parse.Query(BoardGames);

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise.then(
			function(results) {
				console.log(results);
				$scope.boardgames = results;
			},
			function(error) {
				console.log(error);
			}
		);

		query.find().then(
			function(results) {
				deferred.resolve(results);
			},
			function(error) {
				deferred.reject(error);
			}
		);

	}

	$scope.hostNewSessionFor = function(boardgame) {
		var GameOnSession = Parse.Object.extend("GameOnSession");
		var gameonsession = new GameOnSession();

		gameonsession.set("gameTitle", boardgame.attributes.boardName);
		gameonsession.set("host", Parse.User.current());
		gameonsession.set("participants", []);
		gameonsession.set("open", true);
		var point = new Parse.GeoPoint({latitude: Location.currentLocation.lat(), longitude: Location.currentLocation.lng()});
		gameonsession.set("location", point);

		gameonsession.save(null, {
			success: function(session) {
				console.log("You saved it!");
				CurrentSession.currentSession = session;
				location.href = "/#!/session";
			},
			error: function(session, error) {
				console.log("You did not save it!");
			}
		});
	};

}]);