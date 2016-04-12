'use strict';

eventsApp.controller('EditProfileController',
	// We injected gravatarUrlBuilder service into our controller
	function EditProfileController($scope, gravatarUrlBuilder) {
		$scope.user = {};

		$scope.getGravatarUrl = function(email) {
			return gravatarUrlBuilder.buildGravatarUrl(email);
		}
	}
);


