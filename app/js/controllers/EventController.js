'use strict';

eventsApp.controller('EventController',
	function EventController($scope) {

		$scope.snippet = '<span style="color:red">hi there</span>';
		$scope.boolValue = false;
		$scope.mystyle = {color:'red'};
		$scope.myclass = "blue";
		$scope.buttonDisabled = true;
		$scope.sortorder = 'name';
		$scope.query = "";


		// creates an object to use in the page
		$scope.event = {
			name: 'Angular Boot Camp',
			date: new Date(),
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Montain View',
				province: 'CA'
			},
			imageUrl: '/img/angularjs-logo.png',
			sessions: [
				{ 
					name: 'Directives Masterclass',
					creatorName: 'Bob Smith',
					duration: '1 hour',
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directives',
					upVoteCount: 0
				},
				{ 
					name: 'Scopes for fun and profit',
					creatorName: 'John Doe',
					duration: '30 minutes',
					level: 'Introductory',
					abstract: 'This session will take a closer look at scopes. Learn what they do, and how to get them to do it for you.',
					upVoteCount: 0
				},
				{ 
					name: 'Well Behaved Controllers',
					creatorName: 'Jane Doe',
					duration: '2 hours',
					level: 'Intermediate',
					abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbours.' ,
					upVoteCount: 0
				}
			]
		}

		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		}

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		}		
	}



);