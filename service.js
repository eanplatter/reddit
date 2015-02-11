var app = angular.module('reddit');

app.service('mainService', function($http) {
  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'https://devmtn.firebaseio.com/posts.json'
    }).then(function(data) {
      return data.data;
    });
  }

  this.addPost = function(post) {
    console.log(post)
    return $http({
      method: 'PUT',
      url: 'https://devmtn.firebaseio.com/posts/' + post.id + '.json',
      data: post
    }).then(function(data) {
      console.log('post res', data)
    });
  }

  this.vote = function(postId, direction, karma) {
    if(direction === 'up') {
      karma++;
    } else if(direction === 'down'){
      karma--;
    }
    return $http({
      method: 'PATCH',
      url: 'https://devmtn.firebaseio.com/posts/' + postId + '.json',
      data: {karma: karma}
    }).then(function(data) {
      console.log('karma: ', data);
    });
  }

  this.addComment = function(postId, commentObj) {
    return $http({
      method: 'POST',
      url: 'https://devmtn.firebaseio.com/posts/' + postId + '/comments.json',
      data: {comments: commentObj}
    })
  }
















});