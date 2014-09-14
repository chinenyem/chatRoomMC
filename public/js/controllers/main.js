'use strict';

angular.module('ngDay2App')
  .controller('PostsCtrl', function($scope, $location, PostsSvc) {

$scope.message = [
  {
  title:"",
   message:"",
   date:""
  }
];

$scope.chats =[
    {title:""}
];



    $scope.newPost = function(post) {
      PostsSvc.create(post)
      $location.path('/new');
    };
    $scope.posts = PostsSvc.query();


    $scope.createPost = function() {
      $scope.message.push({title:$scope.post.title},{message:$scope.post.message}, {date: new Date()})
      $scope.post.title="";
      $scope.post.message="";
      $scope.post.date="";
      $location.path('/new');
    }; 

    $scope.createName = function(chat) {
      $scope.chats.push({title:$scope.chat.title})
      $scope.chat.title="";
      $location.path('/new');
    };

})


  
