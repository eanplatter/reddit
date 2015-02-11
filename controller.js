var app = angular.module('reddit');
app.controller('PostController', function($scope, mainService) {
  $scope.test = 'Welcome to Reddit!'

  $scope.addPost = function() {
    $scope.newPost.id = guid();
    $scope.newPost.timestamp = Date.now();
    $scope.newPost.karma = 0;
    $scope.newPost.comments = [];
    mainService.addPost($scope.newPost).then(function(data) {
      getData();
    });
    $scope.reset();
  }

  $scope.reset = function() {
    $scope.newPost = {};
  }

  $scope.vote = function(id, direction) {
    console.log($scope.posts[id]);
    mainService.vote(id, direction, $scope.posts[id].karma).then(function(data) {
      getData();
    })
  }

  $scope.submitComment = function(id, comment) {
    mainService.addComment(id, comment).then(function(data) {
      getData();
    });
  };

  var getData = function() {
    mainService.getData().then(function(data) {
      $scope.posts = data;
      console.log('data',data);
    });
  }

  getData();



var guid = function() {
  var s4 = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}














});