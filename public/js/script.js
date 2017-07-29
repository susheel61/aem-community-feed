var app = angular.module('app', ['ngSanitize']);
app.service("Util", ["$http", function($http) {
	this.getAemCommunityFeed = function() {
        return $http.get('/testing').then(function(response) {
            return response.data.items;
        });
    }
}]);

app.directive("aemCommunityFeed", [function() {
    return {
        scope: {
            'url': '='
        },
        templateUrl: 'directive/community-panel.html',
        controller:'communityFeedController'
    }
}]);

app.controller("communityFeedController", ["$scope", "Util", function($scope, util) {
	util.getAemCommunityFeed().then(function(response){		
		$scope.feeds = response;
	});
}]);
