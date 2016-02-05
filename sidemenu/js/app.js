// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.buttons', {
      url: '/buttons',
      views: {
        menuContent: {
          templateUrl: 'templates/buttons.html',
          controller: 'ButtonsCtrl'
        }
      }
    })
    .state('app.forms', {
      url: '/forms',
      views: {
        menuContent: {
          templateUrl: 'templates/forms.html',
          controller: 'FormsCtrl'
        }
      }
    })
    .state('app.cards', {
      url: '/cards',
      views: {
        menuContent: {
          templateUrl: 'templates/cards.html',
          controller: 'CardsCtrl'
        }
      }
    })
    .state('app.slidebox', {
      url: '/slidebox',
      views: {
        menuContent: {
          templateUrl: 'templates/slidebox.html',
          controller: 'SlideBoxCtrl'
        }
      }
    })
    .state('app.video', {
      url: '/video',
      views: {
        menuContent: {
          templateUrl: 'templates/video.html',
          controller: 'VideoCtrl'
        }
      }
    })
    .state('app.flexbox', {
      url: '/flexbox',
      views: {
        menuContent: {
          templateUrl: 'templates/flexbox.html',
          controller: 'FlexboxCtrl'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        menuContent: {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        menuContent: {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/buttons');
}); // .config
