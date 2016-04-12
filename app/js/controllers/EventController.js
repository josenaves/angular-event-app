'use strict';

eventsApp.controller('EventController',
	// Injeting services $scope and eventData into controller; $log too
	function EventController($scope, eventData, $log) {

		//$scope.query = "";
		$scope.sortorder = 'name';
		
		eventData.getEvent()
			.$promise
			.then(function(event) { $scope.event = event; console.log(event);})
			.catch(function(response) { console.log(response); });

		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		}

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		}		
	}

); 