'use strict';

eventsApp.controller('EventController',
	// Injeting services $scope and eventData into controller; $anchorScroll too
	function EventController($scope, eventData, $routeParams) {

		$scope.sortorder = 'name';
		
		eventData.getEvent($routeParams.eventId)
			.$promise
			.then(function(event) { $scope.event = event; console.log(event);})
			.catch(function(response) { console.log(response); });

		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		}

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		}

		$scope.scrollToSession = function() {
			$anchorScroll();
		}
	}

); 