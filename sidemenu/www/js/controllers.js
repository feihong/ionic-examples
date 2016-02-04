'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ButtonsCtrl', function($scope, $ionicPopup) {
  $scope.colorNames = ['positive', 'calm', 'balanced', 'energized', 'assertive',
    'royal', 'dark']

  $scope.iconNames = ['home', 'star', 'gear-a', 'settings', 'music-note',
    'navicon', 'clock', 'leaf', 'trophy', 'jet']

  $scope.showAlert = function(colorName) {
    var alert = $ionicPopup.alert({
      title: 'Thanks for clicking!',
      template: 'Today is looking very ' + colorName,
      okType: 'button-' + colorName,
    })
    alert.then(function(result) {
      console.log(colorName + ' alert was closed with result: ' + result)
    })
  }
})

.controller('FormsCtrl', function($scope) {
  $scope.bool1 = false
  $scope.bool2 = true
  $scope.bool3 = true
  $scope.bool4 = false
})

.controller('CardsCtrl', function($scope) {
  $scope.persons = ['magnetman', 'shadowman', 'snakeman', 'sparkman']

  var adjectives = ['crazy', 'fun', 'weird', 'lugubrious']

  $scope.adjectives = adjectives.map(function(x) {
    var index = Math.floor(Math.random() * adjectives.length)
    return adjectives[index]
  })
})

.controller('SlideBoxCtrl', function($scope) {
  $scope.titles = ['The Hunger Games', 'Catching Fire', 'Mockingjay']
  $scope.colors = ['blue', 'red', 'green']

  $scope.slideHasChanged = function(index) {
    console.log('Slide changed to ' + index)
  }
})

.controller('FlexboxCtrl', function($scope) {
  var robots = ['magnetman', 'shadowman', 'snakeman', 'sparkman',
    'magnetman', 'shadowman']
  $scope.robots = robots

  $scope.containerWidth = robots.length * 120 
})
