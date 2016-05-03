angular.module('users').factory('Location', ['$q',
	function($q) {
		console.log("in Location service");
		var sanjosestateuniversity = new google.maps.LatLng(37.336919, -121.882016);
		var currentLocation = sanjosestateuniversity; // default
		var browserSupportFlag = new Boolean();

		// Try W3C Geolocation (Preferred)
		if (navigator.geolocation) {
			browserSupportFlag = true;
			navigator.geolocation.getCurrentPosition(function(position) {
				console.log("entered the success");
				currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			}, function() {
				console.log("entered the failure");
				handleNoGeoLocation(browserSupportFlag);
			});
		} else { // Browser doesn't support Geolocation
			browserSupportFlag = false;
			handleNoGeoLocation(browserSupportFlag);
		}

		var handleNoGeoLocation = function(errorFlag) {
			if (errorFlag == true) {
				alert("Geolocation service failed. Setting current location to San Jose State University");
				currentLocation = sanjosestateuniversity;
			} else {
				alert("Your browser doesn't support geolocation. We've placed you at San Jose State University.");
				currentLocation = sanjosestateuniversity;
			}
		}

		return {
			currentLocation: currentLocation
		};
	}
]);