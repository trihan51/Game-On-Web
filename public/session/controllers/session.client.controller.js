angular.module('session').controller('SessionController', ['$scope', 'Authentication', '$q', 'CurrentSession', function($scope, Authentication, $q, CurrentSession) {
	$scope.authentication = Authentication;
	$scope.currentsession = CurrentSession.currentSession;

	$scope.initialize = function() {
		// initializing the map
		var mapDiv = document.getElementById('map');
		var map = new google.maps.Map(mapDiv, {
			zoom: 8
		});

		// initializing the session
		var session;
		var GameOnSession = Parse.Object.extend("GameOnSession");
		var query = new Parse.Query(GameOnSession);

		var deferred = $q.defer();
		var promise = deferred.promise;

		promise.then(
			function(result) {
				console.log(result);
				$scope.currentsession = result;

				if (result.attributes.host.attributes.username === Parse.User.current().getUsername()) {
					$scope.currentUserIsHost = true;
				} else {
					$scope.currentUserIsHost = false;
				}

				var pos = {
					lat: result.attributes.location.latitude,
					lng: result.attributes.location.longitude
				};
				var sessionLocationMarker = new google.maps.Marker({
					map: map,
					position: pos,
					icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
					draggable: false
				});

				map.panTo(pos);
			},
			function(error) {
				console.log(error);
			}
		);

		query.equalTo("objectId", CurrentSession.currentSession.id);
		query.include("host");
		query.find().then(
			function(results) {
				console.log(results);
				deferred.resolve(results[0]);
			},
			function(error) {
				deferred.reject(error);
			}
		);
	};

	$scope.startSession = function() {
		var session = $scope.currentsession;

		session.set("open", false);
		session.save(null, {
			success: function(session) {
				console.log("session closed successfully");
				CurrentSession.currentSession = null;
				location.href = "/#!/";
			},
			error: function(session, error) {
				console.log(error);
			}
		});
	};

	$scope.cancelSession = function() {
		var session = $scope.currentsession;
		session.destroy({
			success: function(cancelledSession) {
				CurrentSession.currentSession = null;
				location.href = "/#!/";
			},
			error: function(cancelledSession, error) {
				console.log(error);
			}
		});
	};

	$scope.leaveSession = function() {
		var session = $scope.currentsession;

		var participants = session.attributes.participants;
		var index = participants.indexOf(Parse.User.current().id);
		console.log(index);
		if (index > -1) {
			participants.splice(index, 1);
		}

		session.set("participants", participants);
		session.save(null, {
			success: function(session) {
				CurrentSession.currentSession = null;
				location.href="/#!/";
			},
			error: function(session, error) {
				console.log(error);
			}
		});
	};
}])