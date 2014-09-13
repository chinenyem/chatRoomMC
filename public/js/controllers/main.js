'use strict';

angular.module('ngDay2App')
  .controller('PostsCtrl', function ($scope, $location, PostsSvc) {

// var message = [];

    $scope.createPost = function() {
      // $scope.message.push()
      // $scope.post.title
    	// $location.path('/new');
    };
    $scope.newPost = function(post) {
    	PostsSvc.create(post)
    	// $location.path('/blog');
    };
    $scope.posts = PostsSvc.query();
  })
  .controller('PostCtrl', function($scope, $location, $routeParams, PostSvc) {

  	$scope.post = PostSvc.show({ id: $routeParams.id });
  	$scope.delete = function() { 
  		PostSvc.delete({ id: $routeParams.id });
  		$location.path('/blog');
  	};
  	$scope.edit = function() {
  		PostSvc.edit($scope.post);
  		$location.path('/blog');
  	};

  });
