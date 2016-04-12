'use strict';

eventsApp.controller('EventController',
	// injeting services $scope and eventData into controller
	function EventController($scope, eventData) {

		$scope.sortorder = 'name';
		$scope.query = "";
		$scope.event = eventData.event;

		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		}

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		}		
	}



);