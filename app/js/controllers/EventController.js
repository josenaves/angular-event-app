'use strict';

eventsApp.controller('EventController',
	// Injeting services $scope and eventData into controller; $log too
	function EventController($scope, eventData, $log) {

		$scope.sortorder = 'name';
		$scope.query = "";
		
		eventData.getEvent()
			.success(function(event) { $scope.event = event; })
			.error(function(data, status, headers, config) {
				$log.warn(data, status, headers, config);
			});

		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		}

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		}		
	}

); 