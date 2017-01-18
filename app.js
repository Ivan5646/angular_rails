angular.module('flapperNews', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });
  $urlRouterProvider.otherwise('home');
}])

.factory('posts', [function(){ 
  var o = {
    posts: []
  };
  return o;
}])

.controller('MainCtrl', ['$scope', 'posts', // posts is a factotry
function($scope, posts){
  $scope.posts = posts.posts; // Bind the $scope.posts variable in our controller to the posts array in our service

  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; } // prevents blank field submtting
    $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0}); // $scope.title allows to get user's input
    $scope.title = ''; // clears the input
    $scope.link = ''; // clears the link input
  };
  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };

}
]);






