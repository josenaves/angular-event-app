'use strict';

eventsApp.controller('EventListController',
	// We injected $scope, $location and eventData services
	function EventListController($scope, $location, eventData) {
		$scope.events = eventData.getAllEvents();
	}
); 