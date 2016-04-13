'use strict';

eventsApp.controller('CookieStoreSampleController',
	// We injected $cookieStore service (injected in app.js too)
	function CookieStoreSampleController($scope, $cookieStore) {
		
		$scope.event = { id: 1, name: "My great event"};

		$scope.saveEventToCookie = function(event) {
			$cookieStore.put('event', event);
		};

		$scope.getEventFromCookie = function() {
			console.log($cookieStore.get('event'));
		};

		$scope.removeEventCookie = function() {
			$cookieStore.remove('event');
		};
	}
);