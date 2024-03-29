'use strict';

angular
  .module('ngDay2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
       templateUrl: 'views/main.html'
      })
    .when('/new', {
        templateUrl: 'views/blog-create.html',
        controller: 'PostsCtrl'
      })
    .when('/blog', {
    templateUrl: 'views/blog-list.html',
    controller: 'PostsCtrl'
     })
    .otherwise({
        redirectTo: '/'
      });
  });

      
      
      
      // .when('/blog/:id', {
      //   templateUrl: 'views/blog-detail.html',
      //   controller: 'PostCtrl'
      // })
      // .when('/blog/:id/edit', {
      //   templateUrl: 'views/blog-editDetail.html',
      //   controller: 'PostCtrl'
      // })
      